<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      color="#02c6c1"
      elevation="0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

      <v-btn icon @click="logOut">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
           <v-alert type="info">
      I'm an info alert.
    </v-alert>
      <v-container
        fluid
        fill-height
        class="pt-0 body-content"
        :class="{ 'bg-white': $route.name === 'dashboard' }"
      >
        <v-layout justify-center align-top>
          <v-flex>
            <nuxt-child />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.bg-white {
  background-color: #fff !important;
}
.body-content {
  background-color: #f3f3f5;
}
.state{
  color: #bcd36c; 
  cursor: pointer;
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Default',
  middleware: 'authenticated',
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'mdi-view-dashboard',
        text: 'Dashboard'
      }
    ]
  }),
  methods: {
    ...mapActions(['logOut'])
  }
}
</script>
