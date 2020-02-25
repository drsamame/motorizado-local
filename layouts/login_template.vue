<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height content" fluid>
        <nuxt-child />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.content {
  background: #f3f3f5;
}
</style>

<script>
export default {
  name: 'LoginTemplate'
}
</script>

<style scoped></style>
