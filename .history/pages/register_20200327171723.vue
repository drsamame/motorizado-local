<template>
  <section>
    <v-row class="px-4 top">
      <div class="content-back d-flex align-center justify-start">
        <nuxt-link :to="'/detail/'+$store.state.registerVisit.visitId" class="back d-inline-flex align-center"
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
                return-object
                item-text="name"
                item-value="id"
                :error-messages="errors"
                required
                label="Tipo de inmueble"
                class="select"
              ></v-select>
            </ValidationProvider>
          </div>
          <div class="form-group" v-if="model.property.id === 2 || model.property.id === 4 || model.property.id === 1">
            <ValidationProvider
              v-slot="{ errors }"
              name="floors"
              rules="required"
            >
              <v-select
                v-model="model.floors"
                :items="floors"
                :error-messages="errors"
                required
                class="select"
                label="Cantidad de pisos"
              ></v-select>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="model.property.id === 2 || model.property.id === 4">
            <ValidationProvider
              v-slot="{ errors }"
              name="floorNumber"
              rules="required"
            >
              <v-select 
                v-model="model.floorNumber"
                :items="floors"
                :error-messages="errors"
                required
                class="select"
                label="¿En que piso se encuentra?"
              ></v-select>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <p class="text">Acceso</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="access"
              rules="required"
            >
              <v-radio-group
                v-model="model.doors"
                column
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Una puerta" value="Una puerta"></v-radio>
                <v-radio label="Varias puertas" value="Varias puertas"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>

          <template v-if="model.property.id === 3">
            <div class="form-group">
              <p class="text">¿Está cercado?</p>
              <ValidationProvider
                v-slot="{ errors }"
                name="cercado"
                rules="required"
              >
                <v-radio-group
                  v-model="model.enclosed"
                  column
                  dense
                  class="radioGroup"
                  :error-messages="errors"
                  required
                >
                  <v-radio label="Si" :value="true"></v-radio>
                  <v-radio label="No" :value="false"></v-radio>
                </v-radio-group>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <p class="text">¿Cuenta con servicio de agua?</p>
              <ValidationProvider
                v-slot="{ errors }"
                name="servicio de agua"
                rules="required"
              >
                <v-radio-group
                  v-model="model.water"
                  column
                  dense
                  class="radioGroup"
                  :error-messages="errors"
                  required
                >
                  <v-radio label="Tiene agua" value="si"></v-radio>
                  <v-radio label="Solo está habilitado" value="habilitado"></v-radio>
                  <v-radio label="No tiene" value="no"></v-radio>
                </v-radio-group>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <p class="text">¿Cuenta con servicio de luz?</p>
              <ValidationProvider
                v-slot="{ errors }"
                name="servicio de luz"
                rules="required"
              >
                <v-radio-group
                  v-model="model.electricity"
                  column
                  dense
                  class="radioGroup"
                  :error-messages="errors"
                  required
                >
                  <v-radio label="Tiene Luz" value="si"></v-radio>
                  <v-radio label="Solo está habilitado" value="habilitado"></v-radio>
                  <v-radio label="No tiene" value="no"></v-radio> 
                </v-radio-group>
              </ValidationProvider>
            </div>
          </template>
          
          <div class="form-group" v-if="model.property.id === 2">
            <p class="text">¿Tiene ascensor?</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="ascensor"
              rules="required"
            >
              <v-radio-group
                v-model="model.elevator"
                column
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Si" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="model.property.id === 2">
            <p class="text">¿Tiene techo de material noble?</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="material noble"
              rules="required"
            > 
              <v-radio-group
                v-model="model.buildType"
                column
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Si" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="model.property.id === 1">
            <p class="text">¿Se encuentra en quinta?</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="dentro de una quinta"
              rules="required"
            > 
              <v-radio-group
                v-model="model.onSuburbs"
                column
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Si" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="model.property.id === 1 || model.property.id === 3">
            <ValidationProvider
              v-slot="{ errors }"
              name="metraje del terreno"
              rules="required|max_value:60000"
            >
              <v-text-field
                v-model="model.terrainSize" 
                :error-messages="errors"
                clearable
                type="number"
                placeholder="mts"
                :filled = "true"
                label="Metraje del terreno"
                required
              ></v-text-field>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="model.property.id === 2 || model.property.id === 1">
            <ValidationProvider
              v-slot="{ errors }"
              name="metraje techado"
              rules="required|max_value:50000"
            >
              <v-text-field
                v-model="model.ceilingSize" 
                :error-messages="errors"
                clearable
                type="number"
                placeholder="mts"
                :filled = "true"
                label="Metraje de techado"
                required
              ></v-text-field>
            </ValidationProvider>
          </div>
          
          <div class="form-group" v-if="model.property.id === 2 || model.property.id === 4 || model.property.id === 1">
            <ValidationProvider
              v-slot="{ errors }"
              name="metraje ocupado"
              rules="required|max_value:50000"
            >
              <v-text-field
                v-model="model.mtsOcuped" 
                :error-messages="errors"
                clearable
                type="number"
                placeholder="mts"
                :filled = "true"
                label="Metraje ocupado"
                required
              ></v-text-field>
            </ValidationProvider>
          </div>

          <div class="form-group" v-if="model.property.id === 4">
            <ValidationProvider
              v-slot="{ errors }"
              name="Nº de galeria"
              rules="required"
            >
              <v-text-field
                v-model="model.galeryNumber" 
                :error-messages="errors"
                clearable
                type="number"
                placeholder="Nº"
                :filled = "true"
                label="Galeria en la que se encuentra"
                required
              ></v-text-field>
            </ValidationProvider>
          </div>        

          <div class="form-group spaces">
            <p class="text">Espacios del inmueble</p>
            <div v-for="item in model.spaces" :key="item.text">
              <div class="itemSpace"> 
                <p>{{item.text}}</p> 
                <div class="counter">
                  <div class="rest" @click="updateCounter('rest', item)">-</div>
                    <v-text-field
                      v-model="item.value"
                      type="number"
                      class="counterInput"
                      hide-details
                      readonly
                      :filled = "true"
                      dense
                    ></v-text-field>
                  <div class="add" @click="updateCounter('add',item)">+</div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <p class="text">Estado de la calle frente a la casa</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="Estado de la calle"
              rules="required"
            >
              <v-radio-group
                v-model="model.inFrontHouseState"
                column
                class="radioGroup"
                dense
                :error-messages="errors"
                required
              >
                <v-radio label="Pista asfaltada" value="Pista asfaltada"></v-radio>
                <v-radio label="Sólo trocha" value="Solo trocha"></v-radio>
                <v-radio label="Tierra" value="Tierra"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <p class="text">Estado de orden de la propiedad</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="Estado de la calle"
              rules="required"
            >
              <v-radio-group
                v-model="model.orderState"
                column
                class="radioGroup"
                dense
                :error-messages="errors"
                required
              >
                <v-radio label="Ordenado" value="Ordenado"></v-radio>
                <v-radio label="Medio" value="Medio"></v-radio>
                <v-radio label="Desordenado" value="Desordenado"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <p class="text">¿La referencia fue correcta?</p>
            <ValidationProvider
              v-slot="{ errors }"
              name="referencia"
              rules="required"
            >
              <v-radio-group
                v-model="model.reference"
                column
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Referencia correcta" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </ValidationProvider>
            <v-expand-transition>
              <v-textarea
                v-show="model.reference === false"
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
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio label="Si, es accesible" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </ValidationProvider>
            <v-expand-transition>
              <v-textarea
                v-show="model.accesible === false"
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
                  <img :src="photo.url_image" alt="" />
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
                <v-btn rounded @click="sendForm"> FIRMAR</v-btn>
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form-group{
  &.spaces{
    margin-bottom: 40px;
  }
  margin-bottom: 20px;
}

.v-input--selection-controls{
  &.v-input{
    margin-top:10px;
  }
}
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
    margin-bottom: 10px;
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
.itemSpace{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .counter{
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .centerInput{
      width: 30px !important;
    }
    .add,.rest{
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: $color-primary;
      width: 25px;
      height: 25px;
      border-radius: 50px;
      display: flex;
      color: #fff;
    }
  }
}

</style>

<script>
import { mapActions, mapState } from 'vuex'
import $backend from '@/services/backend'

export default {
  layout: null,
  data() {
    return {
      model: {
        property: { 
          id:2,
          image:"dpto.svg",
          name:"Dpto",
        },
        photos:[],
        floors: 1, 
        floorNumber: 1,
        doors: undefined,
        reference: '',
        otherReference: '',
        accesible: undefined,
        motiveUnaccesible: '',
        spaces: [
          { text: 'Cocina', value: 0, backName: 'kitchen' },
          { text: 'Dormitorios', value: 0, backName: 'rooms' },
          { text: 'Sala', value: 0, backName: 'living_room' },
          { text: 'Jardín', value: 0, backName: 'garden' },
          { text: 'Lavandería', value: 0, backName: 'laundry' },
          { text: 'Patio', value: 0, backName: 'patio' },
          { text: 'Piscina', value: 0, backName: 'pool' }
        ]
      },
      floors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    }
  },
  async asyncData ({params, store}) {
    const dataProperty = await $backend.getPropertyOptions()
    const properties = dataProperty.data.data

    console.log(properties)

    if(store.state.registerVisit.isVisitData){

      const {data} = await $backend.getBikeFormById(store.state.registerVisit.literalCopy)
      const bikerForm = data.data.bikerform      
      
      store.state.registerVisit.dispatch('setPhotosAlbum',photos);

      const property = properties.find(obj => obj.id === bikerForm.ownership.id)
      
      const model = {
        property,
        floor: bikerForm.floor,
        floorNumber: bikerForm.floor,
        doors: bikerForm.access,
        elevator: bikerForm.elevator,
        buildType: bikerForm.build_type,
        spaces: bikerForm.spaces,
        inFrontHouseState: bikerForm.condition_street,
        orderState: bikerForm.status_order,
        reference: bikerForm.correct_reference,
        accesible: bikerForm.accesible
      }
      return { propertyItems: properties, model }
    }
    return { propertyItems: properties }
  },
  computed: mapState({
    photos: state => state.registerVisit.photos,
    visitId: state => state.registerVisit.visitId,
    lastPosition: state => state.registerVisit.visitId
  }),
  methods: {
    ...mapActions({
      setVisitData: 'registerVisit/setVisitData',
      savePhoto: 'registerVisit/savePhoto',
      removePhoto: 'registerVisit/removePhoto',
    }),
    updateCounter(type, input){
      switch(type){
        case 'add':
          if(input.value <= 98){
            input.value += 1;
          } 
          break;
        case 'rest':
          if(input.value >= 1){
            input.value -= 1;
          }
      }
    },
    async sendForm(){
      const isValidated = await this.$refs.form.validate();
      if (isValidated) {
        this.setVisitData(this.model);
        await $backend.sendRegister(this.$store.state.registerVisit.visitId, this.$store.state.registerVisit.sendData)
        this.$router.push('/signature')
      }
    },
  },
  mounted() {
  }
}
</script>
