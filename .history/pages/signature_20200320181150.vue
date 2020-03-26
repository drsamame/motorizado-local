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
      <p class="text">
        Firma del contacto
      </p>
      <ValidationObserver ref="form">
        <form>
          <ValidationProvider
            v-slot="{ errors }"
            name="dni"
            rules="required"
          >
            <v-text-field
              v-model="model.dni"
              type="number"
              :error-messages="errors"
              clearable=""
              label="DNI"
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="nombre"
            rules="required"
          >
            <v-text-field
              v-model="password"
              type="text"
              :error-messages="errors"
              label="Nombre"
              clearable=""
              required
            ></v-text-field>
          </ValidationProvider>
        </form>
      </ValidationObserver>
      <VueSignaturePad
        ref="signaturePad"
        class="signaturePad"
        width="100%"
        height="270px"
      />
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

.signature {
  background-color: #fff;
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
import VueSignaturePad from 'vue-signature-pad'
export default {
  name: 'Signatire',
  layout: null,
  components: {
    VueSignaturePad
  },
  data() {
    return {
      dialogAccept: null
    }
  },
  methods: {
    refuse() {},
    accept() {
      this.modalDialog = false
      this.$router.push('/dashboard')
    },
    undo() {
      this.$refs.signaturePad.undoSignature()
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      if (!isEmpty) {
        this.dialogAccept = true
      }
      console.log(data)
    }
  }
}
</script>
