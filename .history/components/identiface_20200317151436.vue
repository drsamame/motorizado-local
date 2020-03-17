<template>
  <div class="identiface">
    <template v-if="notSupported">
      <label
        id="identify__content"
        class="inputContent"
        :class="{ error: errorMessage !== '' }"
      >
        <input
          id="identify__input"
          type="file"
          class="inputfile"
          accept="image/jpeg"
          @change="validateFile($event)"
        />
        <span id="identify__inputcustom" class="inputcustom">
          <slot name="identify__inputcustom"></slot>
        </span>
      </label>
    </template>
    <template v-else>
      <video
        ref="video"
        :class="{ error: errorMessage !== '' }"
        class="identify__webcamera"
        :width="width"
        :height="height"
        :src="source"
        :autoplay="autoplay"
        playsinline
      />
    </template>
    <div class="progress"></div>
    <p v-if="errorMessage" class="errorMessage">
      {{ this.errorMessage }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.inputContent {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.identiface {
  height: 98%;
  .identify__webcamera {
    height: 98%;
    object-position: center !important;
    object-fit: cover !important;
  }
}

.inputfile {
  min-width: 14rem;
  margin: 0;
  filter: alpha(opacity=0);
  opacity: 0;
}

.inputcustom {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

<script>
import axios from 'axios'
import toblob from 'canvas-to-blob'
import getUserMedia from 'getusermedia'

export default {
  name: 'Identiface',

  props: {
    awsUrl: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    screenshotFormat: {
      type: String,
      default: 'image/jpeg'
    },
    selectFirstDevice: {
      type: Boolean,
      default: false
    },
    deviceId: {
      type: String,
      default: null
    },
    resolution: {
      type: Object,
      default: null,
      validator: value => {
        return value.height && value.width
      }
    }
  },

  data() {
    return {
      source: null,
      notSupported: false,
      canvas: null,
      errorMessage: '',
      camerasListEmitted: false,
      cameras: []
    }
  },

  watch: {
    deviceId(id) {
      if (!this.notSupported) {
        this.changeCamera(id)
      }
    }
  },

  mounted() {
    this.setupMedia()
  },

  beforeDestroy() {
    this.stop()
  },

  methods: {
    /**
     * setup media
     */
    validateFile(event) {
      this.errorMessage = ''
      const exFile = event.target.files[0].type

      if (exFile === 'image/jpeg') {
        console.log(event.target.files[0])

        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
          this.$emit('preview', reader.result)
        }

        this.uploadImage(event.target.files[0])
      } else {
        this.errorMessage = 'Only jpg/jpeg and png files are allowed!'
      }
    },
    setupMedia() {
      this.loadCameras()
    },
    /**
     * load available cameras
     */
    loadCameras() {
      try {
        navigator.mediaDevices
          .enumerateDevices()
          .then(deviceInfos => {
            for (let i = 0; i !== deviceInfos.length; ++i) {
              const deviceInfo = deviceInfos[i]
              if (deviceInfo.kind === 'videoinput') {
                this.cameras.push(deviceInfo)
              }
            }
          })
          .then(() => {
            if (!this.camerasListEmitted) {
              if (this.selectFirstDevice && this.cameras.length > 0) {
                this.deviceId = this.cameras[0].deviceId
              }
              this.$emit('cameras', this.cameras)
              this.camerasListEmitted = true
            }
          })
          .catch(error => {
            this.notSupported = true
            this.$emit('notsupported', error)
          })
      } catch (err) {
        this.notSupported = true
        this.$emit('notsupported', err)
      }
    },

    /**
     * change to a different camera stream, like front and back camera on phones
     */
    changeCamera(deviceId) {
      this.stop()
      this.$emit('camera-change', deviceId)
      this.loadCamera(deviceId)
    },

    /**
     * load the stream to the
     */
    loadSrcStream(stream) {
      if ('srcObject' in this.$refs.video) {
        // new browsers api
        this.$refs.video.srcObject = stream
      } else {
        // old broswers
        this.source = window.HTMLMediaElement.srcObject(stream)
      }
      // Emit video start/live event
      this.$refs.video.onloadedmetadata = () => {
        this.$emit('video-live', stream)
      }

      this.$emit('started', stream)
    },

    /**
     * stop the selected streamed video to change camera
     */
    stopStreamedVideo(videoElem) {
      const stream = videoElem.srcObject
      const tracks = stream.getTracks()

      tracks.forEach(track => {
        // stops the video track
        track.stop()
        this.$emit('stopped', stream)

        this.$refs.video.srcObject = null
        this.source = null
      })
    },

    // stop the video
    stop() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.stopStreamedVideo(this.$refs.video)
      }
    },

    // start the video
    start() {
      this.loadCamera(this.deviceId)
    },

    // pause the video
    pause() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.$refs.video.pause()
      }
    },

    // resume the video
    resume() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.$refs.video.play()
      }
    },

    /**
     * load the camera passed as index!
     */
    loadCamera(device) {
      const constraints = { video: { deviceId: { exact: device } } }
      if (this.resolution) {
        constraints.video.height = this.resolution.height
        constraints.video.width = this.resolution.width
      }
      getUserMedia(constraints, (err, stream) => {
        if (err !== null) {
          if (err.name === 'NotAllowedError') {
            this.errorMessage =
              'please  reload the page and accept the permissions for camera use'
            this.$emit('error', err)
          } else {
            this.notSupported = true
            this.$emit('error', err)
          }
          return
        }

        if (window.ImageCapture) {
          const mediaStreamTrack = stream.getVideoTracks()[0]
          this.imageCapture = new ImageCapture(mediaStreamTrack)
        }
        this.video = this.$refs.video
        this.loadSrcStream(stream)
      })
    },

    /**
     * capture screenshot
     */
    capture() {
      this.$emit('preview', this.getCanvas().toDataURL(this.screenshotFormat))
      this.uploadImage(
        toblob(this.getCanvas().toDataURL(this.screenshotFormat))
      )
    },

    async uploadImage(image) {
      const res = await axios.post(this.awsUrl)
      const credentials = res.data.data.fields
      const url = res.data.data.url
      const imageUrl = res.data.url

      const data = new FormData()

      Object.keys(credentials).forEach(key =>
        data.append(key, credentials[key])
      )

      data.append('file', image)

      /*
                for (var pair of data.entries()) {
                    console.log(pair[0] + ', ' + pair[1]);
                } */

      await axios({
        method: 'post',
        url,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )
          this.$emit('progress', percentCompleted)
        }
      })

      this.$emit('image-ready', imageUrl)
    },

    /**
     * get canvas
     */
    getCanvas() {
      const video = this.$refs.video
      if (!this.ctx) {
        const canvas = document.createElement('canvas')
        canvas.height = video.videoHeight
        canvas.width = video.videoWidth
        this.canvas = canvas

        this.ctx = canvas.getContext('2d')
      }

      const { ctx, canvas } = this
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      return canvas
    }
  }
}
</script>
