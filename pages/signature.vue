<template>
  <section>
    <v-row class="px-4 top">
      <div class="content-back d-flex align-center justify-start">
        <nuxt-link to="/register" class="back d-inline-flex align-center"
          ><v-icon class="arrow">mdi-arrow-left</v-icon>VOLVER</nuxt-link
        >
      </div>
    </v-row>
    <div class="signature mt-4 pa-5">
      <ValidationObserver ref="form">
        <div class="title">Responsable de visita</div>
        <form>
          
          <div class="form-group">
            <ValidationProvider
              v-slot="{ errors }"
              name="access"
              rules="required"
            >
              <v-radio-group
                v-model="model.currentContact"
                column
                dense
                class="radioGroup"
                :error-messages="errors"
                required
              >
                <v-radio v-for="contact in contacts" :key="contact.document" :label="contact.full_name" :value="contact"></v-radio>
                <v-radio label="Otro" value="otro"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </div>
          <template v-if="model.currentContact === 'otro'">
            <ValidationProvider
              v-slot="{ errors }"
              name="document"
              rules="required"
            >
              <v-select
                v-model="model.typeDocument" 
                :items="typeDocuments"
                return-object
                item-text="short_name"
                item-value="id"
                :error-messages="errors"
                required
                label="Tipo de documento"
                class="select"
              ></v-select>
            </ValidationProvider>

            <ValidationProvider
            v-slot="{ errors }"
            name="documento" 
            :rules="{ min:model.typeDocument.length, max:model.typeDocument.length, required: true }"
            >
              <v-text-field
                v-model="model.document"
                type="text"
                :error-messages="errors"
                :maxlength="model.typeDocument.length" 
                v-numeric-only
                clearable=""
                label="Nro. de documento"
                required
              ></v-text-field>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="nombre"
              rules="required|alpha_spaces"
            >
              <v-text-field
                v-model="model.name"
                type="text"
                :error-messages="errors"
                label="Nombre"
                required
                clearable=""
              ></v-text-field>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="phone"
              rules="required|min:7|max:12"
            >
              <v-text-field
                v-model="model.phone"
                type="text"
                :error-messages="errors"
                label="Teléfono"
                :maxlength="12" 
                v-numeric-only
                clearable=""
                required
              ></v-text-field>
            </ValidationProvider>
            
          </template>
          
        </form>
      </ValidationObserver>
      <p class="text">
        Firma del contacto
      </p>
      <VueSignaturePad
        saveType="image/jpeg"
        background-color="#ffffff"
        :options="{backgroundColor:'#ffffff'}"
        ref="signaturePad"
        class="signaturePad"
        width="100%"
        height="270px"
      />
      <p class="errorSignature" v-show="errorSignature">
        Por favor firmar en el cuadro
      </p>
      <div class="actions d-flex align-center justify-space-between">
        <v-btn rounded outlined @click="undo"> LIMPIAR</v-btn>
        <v-btn rounded class="btn-signature" @click="save">GUARDAR</v-btn>
      </div>
    </div>

    <!-- Dialogs -->
    <v-dialog v-model="dialogAccept" max-width="300px">
      <v-card class="dialog">
        <v-card-title class="pb-0"
          ><p class="text">
            Recuerda que al firmar la visita ya no podrás editarla.
            <br />
            ¿Desea continuar?
          </p></v-card-title
        >

        <v-card-actions class="d-flex justify-end">
          <v-btn text class="cancel" @click="dialogAccept = false">
            <span class="textCancel">Cancelar</span>
          </v-btn>
          <v-btn text class="accept" @click="accept">FIRMAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';


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

.errorSignature{
  color: #ff5252;
  font-size: 12px;
  margin-top: 10px;
}

.signature {
  background-color: #fff;
  .title{
    color: rgba(21, 22, 61, 0.4);
  }
  .text {
    font-size: 12px;
    color: rgba(21, 22, 61, 0.6);
  }
  .signaturePad {
    border: 1px solid rgba(21, 22, 61, 0.1);
    box-sizing: border-box;
  }
  .actions {
    button {
      margin-top: 24px;
      height: 48px;
      color: $color-primary;
      width: 100%;
      flex: 1 1 30%;
      margin-right: 17px;
    }
    .btn-signature {
      margin-left: 17px;
      margin-right: 0;
      height: 48px;
      color: #fff;
      background: $color-primary !important;
      box-shadow: none;
      width: 100%;
      flex: 1 1 30%;
    }
  }
}
.dialog {
  .text {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: $color-base;
    letter-spacing: 0.15px;
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
import { mapState } from 'vuex'
import VueSignaturePad from 'vue-signature-pad'
import $backend from '@/services/backend'
import { base64ToBlob } from 'base64-blob'
import axios from 'axios'

export default {
  name: 'Signature',
  layout: null,
  components: {
    VueSignaturePad
  },
  async asyncData () {
    const typeDocuments = await $backend.getTypeDocuments();
    return { typeDocuments: typeDocuments.data.data }
  },
  data() {
    return {
      envUrl:process.env.baseURLApiSpa,
      model:{
        typeDocument:{
          id:1,
          is_numeric:1,
          length:8,
          name:"Documento Nacional de Identidad",
          short_name:"DNI",
          taxpayer_type:0
        }
      },
      errorSignature:false,
      dialogAccept: null,
      signature: undefined,
      dataBody:{},
    }
  },
  computed: mapState({
    contacts: state => state.registerVisit.visitContacts
  }), 
  methods: {
    refuse() {},
    async accept() {
      base64ToBlob(this.signature).then((image) =>{
        this.uploadImage(image)
      })
    },
    async uploadImage(image) {
      let res = await $backend.uploadSignature({
          method: 'post',  
          url: `${this.envUrl}/v1/admin/biker/visit/upload_file/${this.$store.state.registerVisit.visitId}`
        } 
      );
      let credentials = res.data.data.fields;
      let url = res.data.data.url;
      let imageUrl = res.data.url;
      let name_image = res.data.data.fields.Key;

      let data = new FormData();

      Object.keys(credentials).forEach(key => data.append(key, credentials[key]));
      
      data.append('file', image);

      await axios({
          method: 'post',
          url,
          data,
          onUploadProgress: (progressEvent) => {
              var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          } 
      }); 
      
      const signatory = {};
      if(this.model.currentContact === 'otro'){ 
          signatory.type_document= this.model.typeDocument.id,
          signatory.document= this.model.document,
          signatory.full_name= this.model.name,
          signatory.phone= this.model.phone
      } 
      if(typeof this.model.currentContact === 'object'){
          signatory.type_document= parseInt(this.model.currentContact.type_document),
          signatory.document= this.model.currentContact.document,
          signatory.full_name= this.model.currentContact.full_name,
          signatory.phone= this.model.currentContact.phone
      }

      await $backend.sendSignature(  
        this.$store.state.registerVisit.visitId,
        {url_image: imageUrl, name_image, signatory}
      )
      
      this.modalDialog = false
      this.$router.push('/dashboard') 
  
    },
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    async save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      const isValidated = await this.$refs.form.validate();
      
      this.errorSignature = isEmpty ? true:false;
      
      if (isValidated) {

        if (!isEmpty) {
          this.errorSignature = false;
          this.signature = data
          this.dialogAccept = true
        }
      }

    }
  }
}
</script>
