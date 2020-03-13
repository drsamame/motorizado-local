<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12"> 
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="d-flex align-center"><img class="logo" src="/icon.png" alt=""> Motorizado </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <ValidationObserver ref="form">
              <form>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    prepend-icon="mdi-account"
                    clearable=""
                    label="Usuario"
                    required
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    type="password"
                    :error-messages="errors"
                    prepend-icon="mdi-key"
                    label="password"
                    clearable=""
                    required
                  ></v-text-field>
                </ValidationProvider>
              </form>
            </ValidationObserver>
          </v-card-text>
          <v-card-actions class="pb-4 pd-4 pl-4" justify="right">
            <v-btn
              class="mr-4"
              color="primary"
              align="center"
              max-width="100%"
              outlined
              tile
              large
              @click="loginForm"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
  .logo{
    width: 40px;
    height: 40px;
    margin-right: 14px;
  }
</style>

<script>
import { mapActions } from 'vuex'
import $backend from '@/services/backend'
import * as Cookie from 'js-cookie'

export default {
  layout: 'login_template',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    
  },
  methods: {
    ...mapActions(['setAuth']),
    async loginForm() {
      const isValidated = await this.$refs.form.validate()
      if (isValidated) {
        const response = await $backend
          .login(this.email, this.password)
          .catch(err => {
            const errors = {}
            for (const item in err.response.data.input) {
              errors[item] = err.response.data.input[item].name
            }
            this.$refs.form.setErrors(errors)
          })

        if (response) {
          const authData = response.data
          Cookie.set('auth', authData)
          this.setAuth(authData)
          this.$router.push('/dashboard')
        }
      }
    }
  }
}
</script>
