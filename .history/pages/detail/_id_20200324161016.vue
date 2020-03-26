<template>
  <section>
    <!--<button @click="bgclick">send_post</button>-->
    <v-row class="px-4 top">
      <div class="content-back d-flex align-center justify-start">
        <nuxt-link to="/dashboard" class="back d-inline-flex align-center"
          ><v-icon class="arrow">mdi-arrow-left</v-icon>VOLVER</nuxt-link>
      </div>
    </v-row>
    <div class="detail-content">
      <article class="mt-4">
        <v-card class="detail">
          <div class="top d-flex justify-start align-start pa-4">
            <div class="detail__icon flex-column justify-start mr-5">
              <v-icon>mdi-home</v-icon>
              <p>{{model.property_type}}</p>
            </div>
            <div class="detail__info">
              <h3 class="state pend">Pendiente</h3>
              <p class="hour">
                {{model.year}} - {{model.hour}}
              </p>
            </div>
          </div>
          <div class="middle d-flex mt-2 pa-4 align-start">
            <img
              src="~/assets/images/pointer.svg"
              class="mr-3 pointer"
              alt=""
            />
            <div class="detail__direction">
              <p class="dir">
                {{model.direction}}
              </p>
              <p class="ref">
                Ref. {{model.reference}}
              </p>
              <div class="dash"></div>
              <p class="description">
                {{model.observation}}
              </p>
            </div>
          </div>
        </v-card>
      </article>
      <div class="content-map mb-4">
        <a :href="mapsUrl" class="overlay"></a>
        <client-only>
          <l-map
            :zoom="zoom" 
            :center="center"
            style="height: 325px"
          >
            <l-tile-layer
              :url="url"
              :attribution="attribution"
            />
            <l-marker :lat-lng="marker"></l-marker>
          </l-map> 
        </client-only>
      </div>
      <article>
        <v-card
          class="contact d-flex justify-space-between align-center pa-4" v-for="contact in model.contacts" :key="contact.name"
        >
          <div class="contact__image">
            <img src="~/assets/images/person.svg" alt="" />
          </div>
          <div class="contact__name">
            <p class="name text-truncate">
              {{contact.contact_name}}
            </p>
            <p class="dni text-truncate">DNI {{contact.contact_dni}}</p>
          </div>
          <a
            :href="'tel:'+contact.contact_phone"
            class="contact__phone d-flex justify-center align-center"
          >
            <v-icon>mdi-phone</v-icon>
          </a>
        </v-card>
      </article>
      <article class="actions d-flex justify-space-between align-center">
        <v-btn
          class="decline"
          align="center"
          large
          @click="dialogDecline = true"
          >Rechazar</v-btn
        >
        <nuxt-link to="/register" class="accept v-btn"
          >Registrar Visita</nuxt-link
        >
      </article>
    </div>

    <!-- Dialogs -->
    <v-dialog v-model="dialogDecline" max-width="300px">
      <v-card class="dialog">
        <v-card-title class="pb-0"
          ><p class="text">Indica el motivo</p></v-card-title
        >
        <v-card-text class="pb-0">
          <v-radio-group v-model="declineMotive" column class="radioGroup">
            <v-radio label="No se encontro a nadie" :value="1"></v-radio>
            <v-radio label="Solicitó reprogramar" :value="2"></v-radio>
            <v-radio label="Otro" :value="3"></v-radio>
          </v-radio-group>
          <v-expand-transition>
            <v-textarea
              v-show="declineMotive == 3"
              v-model="otherMotive"
              class="textArea"
              name="motivo"
              label="Motivo"
            ></v-textarea>
          </v-expand-transition>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text class="cancel" @click="dialogDecline = false">
            <span class="textCancel">Cancelar</span>
          </v-btn>
          <v-btn text class="reject" @click="refuse">rechazar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<style lang="scss" scoped>
.top {
  background-color: #fff;
}
.content-back {
  height: 48px;
  background: #fff;
  .back {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.65px;
    text-decoration: none;
    .v-icon {
      margin-right: 10px;
      color: $color-primary;
    }
  }
}
.detail {
  box-shadow: none;
  .pointer {
    margin-left: 5px;
  }
  &__icon {
    .v-icon {
      font-size: 40px;
      color: #4f7ddb;
      height: 30px;
      margin-top: -20px;
    }
    p {
      font-size: 10px;
      line-height: 16px;
      margin-top: -10px;
      font-weight: 500;
      color: $color-base;
      margin-bottom: 0;
      text-transform: uppercase;
      text-align: center;
    }
    font-size: 30px;
  }
  &__info {
    .state {
      font-size: 24px;
      line-height: 20px;
      margin-bottom: 15px;
      font-weight: 500;
      color: #4f7ddb;
      text-transform: capitalize;
    }
    .hour {
      font-size: 10px;
      line-height: 16px;
      margin-bottom: 0;
      font-weight: 500;
      color: $color-base;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  }
  &__direction {
    p {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.25px;
      margin-bottom: 10px;
      &.dir {
        color: $color-base;
      }
      &.ref {
        color: rgba(21, 22, 61, 0.6);
      }
    }
  }
  .dash {
    border-bottom: 1px solid rgba(21, 22, 61, 0.2);
    margin-bottom: 10px;
  }
}
.contact {
  box-shadow: 0px 1px 3px rgba(79, 125, 219, 0.25);
  margin-bottom: 15px;
  &__image {
    img {
      width: 43px;
    }
    flex: 0 1 43px;
    margin-right: 15px;
  }
  &__name {
    flex: 1 1 auto;
    overflow: hidden;
    .name {
      color: $color-base;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.25px;
      margin-bottom: 12px;
    }
    .dni {
      font-size: 12px;
      margin-bottom: 0;
      line-height: 12px;
      letter-spacing: 0.32px;
      color: rgba(0, 0, 0, 0.54);
    }
  }
  &__phone {
    flex: 0 30px;
    background: rgba(21, 22, 61, 0.05);
    border-radius: 50px !important;
    height: 30px;
    text-decoration: none;
    .v-icon {
      font-size: 16px;
      color: $color-primary;
    }
  }
}
.content-map {
  width: 100%;
  z-index: 1;
  position: relative;
  img {
    width: 100%;
  }
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
  }
}
.actions {
  margin-top: 42px;
  margin-bottom: 60px;
  button {
    color: #fff;
    border-radius: 50px;
  }
  .decline {
    background-color: #ff6961 !important;
  }
  .accept {
    background-color: $color-primary !important;
    color: #fff;
    border-radius: 50px;
    text-decoration: none;
    font-size: 0.875rem;
    height: 44px;
    padding: 0 19.5555555556px;
    text-transform: uppercase;
    align-items: center;
    display: flex;
    line-height: normal;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    -webkit-appearance: button;
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
  .v-input {
    &--radio-group {
      margin-top: 5px;
    }
  }
  .v-card__actions {
    .reject {
      color: $color-primary;
    }
    .v-btn--text {
      &.cancel {
        span {
          color: $color-base;
        }
      }
    }
  }
  .radioGroup {
    .v-radio {
      &::v-deep .v-label {
        color: $color-base;
      }
    }
  }
}
</style>

<script>
import { mapActions } from 'vuex'
import $backend from '@/services/backend'

export default {
  name: 'Detail',
  layout: 'null',
  components: {},
  data() {
    return {
      zoom: 23,
      marker: [-12.1215361,-77.032019],
      center: [-12.1215361,-77.032019],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      otherMotive: '',
      declineMotive: '',
      dialogDecline: false
    }
  },
  async asyncData ({params}) {
    const {data} = await $backend.getVisitById(params.id); 
    console.log(data);
    const model = data.data;

    const mapsUrl = `https://www.google.com/maps/place/${model.coords.lat}+${model.coords.long}/@${model.coords.lat},${model.coords.long},15z`
    return {model, mapsUrl}
  },
  mounted(){
    this.setVisitId(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      setVisitId: 'registerVisit/setVisitId',
    }),
    bgclick(){
      const response = $backend.getPostBackgroundsynExample().then(response => {
        console.log(response); 
        alert('enviado')
      });
    },
    refuse() {
      this.$router.push('/dashboard')
    }
  }
}
</script>
