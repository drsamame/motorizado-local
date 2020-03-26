<template>
  <section>
    <nuxt-link to="/register" class="back d-inline-flex align-center"
      ><v-icon class="arrow">mdi-arrow-left</v-icon>VOLVER</nuxt-link
    >
    <v-row>
      <div class="camera">
        <client-only>
          <WebCam
            ref="webcam"
            aws-url="https://api.dev.prestamype.com/v1/prestajapi/post_upload_file_s3"
            :aws-config="{}"
            :device-id="deviceId"
            width="100%"
            height="100%"
            :resolution="{ width: 1280, height: 600 }"
            class="identiface"
            @error="onError" 
            @cameras="onCameras"
            @camera-change="onCameraChange"
            @image-ready="onImageReady"
            @progress="onImageProgress"
            @preview="onPreviewImage"
          ></WebCam>
        </client-only>
      </div>
      <template v-if="!notSupport">
        <div class="content-capture">
          <button class="capture" @click="Capture"></button>
        </div>
      </template>
    </v-row>

    <!-- Dialogs -->
    <v-dialog v-model="dialogConfirm" max-width="80%">
      <v-card class="dialog">
        <img :src="img" alt="" />
        <v-card-text class="pt-4">
          <v-text-field
            v-model="model.title"
            :counter="220"
            label="Titulo"
            required
          ></v-text-field>
          <v-textarea
            v-model="model.description"
            class="textArea"
            :counter="true"
            name="Descripción"
            label="Descripción"
          ></v-textarea>
        </v-card-text>

        <v-card-actions class="d-flex justify-end">
          <v-btn text class="cancel" @click="dialogConfirm = false">
            <span class="textCancel">Cancelar</span>
          </v-btn>
          <v-btn text class="accept" @click="save">GUARDAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<style lang="scss" scoped>
.identify__webcamera{
  object-fit: scale-down;
}

section {
  margin-bottom: -20px;
}
.camera {
  height: calc(100vh - 56px);
  background: #000;
  width: 100%;

  .content-capture {
    width: 100%;

    button {
      position: absolute;
    }
  }
}

.content-capture {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  button {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50px;
    border: 5px solid #d2d2d2;
  }
}

.back {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.65px;
  text-decoration: none;
  position: absolute;
  top: 25px;
  z-index: 3;
  color: #fff;
  i {
    color: #fff;
  }
}
.dialog {
  .v-card__title {
    .text {
      font-size: 1px;
      font-weight: normal;
      color: $color-base;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0.5px;
      margin-bottom: 0;
    }
  }
  img {
    width: 100%;
    display: block;
  }
  .cancel {
    color: rgba(21, 22, 61, 0.6);
    letter-spacing: 0.75px;
  }
  .accept {
    color: $color-primary;
    letter-spacing: 0.75px;
  }
}
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Camera',
  layout: 'null',
  data() {
    return {
      model: {
        title: '',
        description: ''
      },
      notSupport: false,
      dialogConfirm: null,
      isBackCamera: false, 
      img: null,
      camera: null,
      deviceId: null,
      devices: []
    }
  },
  computed: {
    device() {
      return this.devices.find(n => n.deviceId === this.deviceId)
    }
  },
  watch: {
    camera(id) {
      this.deviceId = id
    },
    devices() {
      this.devices.forEach(element => {
        if (element.label.toLowerCase().indexOf('back') !== -1) {
          this.camera = element.deviceId
          this.deviceId = element.deviceId
          this.isBackCamera = true;
        }
      }); 
      if(!this.isBackCamera){
        const [first, ...others] = this.devices
        if (first) {
          this.camera = first.deviceId
          this.deviceId = first.deviceId
        }
      }
    }
  },
  methods: {
    ...mapActions({
      savePhoto: 'registerVisit/savePhoto'
    }),
    save() {
      const photo = {
        image: this.img,
        title: this.model.title,
        description: this.model.description
      }
      this.savePhoto(photo)
      this.$router.push('/register')
    },
    onPreviewImage(preview) {
      this.img = preview
    },
    onImageProgress(percent) {
      console.log(percent)
    },
    onImageReady(image) {
      console.log(image)
    },
    Capture() {
      this.dialogConfirm = true
      this.$refs.webcam.capture()
    },
    onError(error) {
      this.notSupport = true
      console.log('On Error Event', error)
    },
    onCameras(cameras) {
      this.devices = cameras
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId
      this.camera = deviceId
    }
  }
}
</script>
