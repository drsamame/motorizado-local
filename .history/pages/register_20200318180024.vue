<template>
  <section>
    <v-row class="px-4 top">
      <div class="content-back d-flex align-center justify-start">
        <nuxt-link to="/detail" class="back d-inline-flex align-center"
          ><v-icon class="arrow">mdi-arrow-left</v-icon>VOLVER</nuxt-link>
      </div>
    </v-row>
    <div class="register mt-4 pa-5">
      <ValidationObserver ref="form">
        <form>
          <div class="form-group">
            <ValidationProvider
              v-slot="{ errors }"
              name="propertyType"
              rules="required"
            >
              <v-select
                v-model="model.property"
                :items="propertyItems"
                :error-messages="errors"
                required
                label="Tipo de inmueble"
                class="select"
              ></v-select>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="property !== 'Terreno'">
            <ValidationProvider
              v-slot="{ errors }"
              name="propertyType"
              rules="required"
            >
              <v-select
                v-model="model.floor"
                :items="floors"
                :error-messages="errors"
                required
                class="select"
                label="Cantidad de pisos"
              ></v-select>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <p class="text">Indica el motivo</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="propertyType"
              rules="required"
            >
              <v-radio-group
                v-model="model.door"
                column
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Una puerta" :value="1"></v-radio>
                <v-radio label="Varias puertas" :value="2"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <p class="text">Espacios del inmueble</p>
            <div v-for="item in spaces" :key="item.value">
              <v-checkbox
                v-model="model.propertySpace"
                :label="item.text"
                :value="item.value"
                type="checkbox"
                required
              ></v-checkbox>
            </div>
          </div>
          <div class="form-group">
            <p class="text">Estado de la calle frente a la casa</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="propertyType"
              rules="required"
            >
              <v-radio-group
                v-model="model.streetState"
                column
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Pista asfaltada" :value="1"></v-radio>
                <v-radio label="Sólo trocha" :value="2"></v-radio>
                <v-radio label="Tierra" :value="3"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <p class="text">¿La referencia fue correcta?</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="isAccesible"
              rules="required"
            >
              <v-radio-group
                v-model="model.reference"
                column
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Referencia correcta" :value="1"></v-radio>
                <v-radio label="No" :value="0"></v-radio>
              </v-radio-group>
            </ValidationProvider>
            <v-expand-transition>
              <v-textarea
                v-show="model.reference === 0"
                v-model="model.otherReference"
                class="textArea"
                :counter="true"
                name="motivo"
                label="Motivo"
              ></v-textarea>
            </v-expand-transition>
          </div>
          <div class="form-group">
            <p class="text">¿La propiedad es accesible?</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="isAccesible"
              rules="required"
            >
              <v-radio-group
                v-model="model.accesible"
                column
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Si, es accesible" :value="1"></v-radio>
                <v-radio label="No" :value="0"></v-radio>
              </v-radio-group>
            </ValidationProvider>
            <v-expand-transition>
              <v-textarea
                v-show="model.accesible === 0"
                v-model="model.motiveUnaccesible"
                class="textArea"
                name="motivo"
                label="Motivo"
              ></v-textarea>
            </v-expand-transition>
          </div>
          <div class="form-group">
            <p class="text">Fotos de la propiedad</p>
            <div class="photo d-flex-column">
              <div
                v-for="(photo, index) in photos"
                :key="index"
                class="photo__item d-flex"
              >
                <div class="mapcontent">
                  <img :src="photo.image" alt="" />
                </div>
                <div
                  class="text-content d-flex justify-space-between align-center"
                >
                  <div class="content">
                    <div class="title">{{ photo.title }}</div>
                    <p class="description text-truncate">
                      {{ photo.description }}
                    </p>
                  </div>
                  <div class="remove d-flex justify-center align-center">
                    <v-icon @click="removePhoto(index)">mdi-delete</v-icon>
                  </div>
                </div>
              </div>

              <div class="actions d-flex justify-center align-center">
                <nuxt-link to="/camera">
                  <v-btn rounded outlined>
                    <v-icon>mdi-plus</v-icon>
                    AGREGAR</v-btn
                  >
                </nuxt-link>
              </div>
              <div class="btn-signature d-flex justify-center align-center">
                <nuxt-link to="/signature">
                  <v-btn rounded> FIRMAR</v-btn>
                </nuxt-link>
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
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
.register {
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  .text {
    font-size: 12px;
    color: rgba(21, 22, 61, 0.6);
  }
  .photo {
    &__item {
      .mapcontent {
        flex: 1 0 77px;
        max-width: 20%;
        img {
          width: 100%;
        }
      }
      .text-content {
        flex: 2 1 190px;
        max-width: 80%;
        margin-left: 13px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        .content {
          flex: 1 1 80%;
          overflow: hidden;
          .title {
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
            font-weight: normal;
            color: $color-base;
          }
          .description {
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.25px;
          }
        }
      }
      .remove {
        flex: 1 1 28px;
        button {
          color: #ff6961;
          cursor: pointer;
        }
      }
    }
    .actions {
      border-bottom: 1px solid rgba(21, 22, 61, 0.2);
      a {
        text-decoration: none;
      }
      button {
        margin: 16px;
        max-width: 148px;
        height: 48px;
        color: $color-primary;
        text-decoration: none;
        width: 100%;
      }
    }
    .btn-signature {
      button {
        margin: 16px 16px 0 16px;
        max-width: 148px;
        height: 48px;
        color: #fff;
        background: $color-primary !important;
        box-shadow: none;
        width: 100%;
      }
    }
  }
}
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: null,
  data() {
    return {
      model: {
        property: 'Edificio',
        floor: '1',
        door: '1',
        propertySpace: [],
        streetState: '',
        reference: '',
        otherReference: '',
        accesible: [],
        motiveUnaccesible: ''
      },
      propertyItems: ['Departamento', 'Edificio', 'Casa', 'Terreno'],
      floors: ['1', '2', '3', '4', '5', '6'],
      spaces: [
        { text: 'Cocina', value: 1 },
        { text: 'Dormitorios', value: 2 },
        { text: 'Sala', value: 3 },
        { text: 'Jardín', value: 4 },
        { text: 'Lavandería', value: 5 },
        { text: 'Patio', value: 6 },
        { text: 'Piscina', value: 7 }
      ]
    }
  },
  computed: mapState({
    photos: state => state.registerVisit.photos
  }),
  methods: {
    ...mapActions({
      savePhoto: 'registerVisit/savePhoto',
      removePhoto: 'registerVisit/removePhoto'
    })
  },
  mounted() {}
}
</script>
