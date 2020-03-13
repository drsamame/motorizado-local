<template>
  <div>
    <v-row>
      <v-tabs v-model="tab" centered grow>
        <v-tab>
          <h3 class="titleTab">
            PENDIENTES
          </h3>
        </v-tab>
        <v-tab>
          <h3 class="titleTab">
            CANCELADAS
          </h3>
        </v-tab>
        <v-tab>
          <h3 class="titleTab">
            APLICADAS
          </h3>
        </v-tab>
      </v-tabs>
    </v-row>

    <v-tabs-items v-model="tab" class=" mx-2">
      <v-tab-item class="pb-3 content-card">
        <v-card class="pa-5 open mt-4 card">
          <div class="d-flex justify-space-between">
            <h3 class="state pend">Pendiente</h3>
            <p class="hour">
              03/10/20 - 08:30am
            </p>
          </div>

          <div class="personal-info">
            Av. Aramburú 279, San Isidro - Lima <br />
            Jorge A. Luna Victoria Sanchez
          </div>
          <nuxt-link to="/detail" class="detail d-inline-flex align-items"
            >DETALLE <v-icon class="arrow">mdi-arrow-right</v-icon></nuxt-link
          >
        </v-card>
      </v-tab-item>
      <v-tab-item class="pb-3 content-card">
        <v-card elevation="0" class="pa-4 canceled mt-4 card">
          <div class="d-flex justify-space-between">
            <h3 class="state pend">Cancelado</h3>
            <p class="hour">
              03/10/20 - 08:30am
            </p>
          </div>
          <div class="personal-info">
            Av. Aramburú 279, San Isidro - Lima <br />
            Jorge A. Luna Victoria Sanchez
          </div>
          <nuxt-link to="/detail" class="detail d-inline-flex align-items"
            >DETALLE <v-icon class="arrow">mdi-arrow-right</v-icon></nuxt-link
          >
        </v-card>
      </v-tab-item>
      <v-tab-item class="pb-3 content-card">
        <v-card class="pa-4 closed mt-4 card">
          <v-icon class="check">mdi-check</v-icon>
          <div class="d-flex justify-space-between">
            <h3 class="state pend">Aplicada</h3>
            <p class="hour">
              03/10/20 - 08:30am
            </p>
          </div>

          <div class="personal-info">
            Av. Aramburú 279, San Isidro - Lima <br />
            Jorge A. Luna Victoria Sanchez
          </div>
          <nuxt-link to="/detail" class="detail d-inline-flex align-items"
            >DETALLE <v-icon class="arrow">mdi-arrow-right</v-icon></nuxt-link
          >
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<style lang="scss" scoped>
.content-card {
  .card {
    &:last-child {
      margin-bottom: 20px;
    }
  }
}

.v-tab:before {
  background-color: transparent;
}
.titleTab {
  font-size: 10px;
  @media (min-width: 360px) {
    font-size: 12px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
    left: 0;
    bottom: 0;
  }
}
.hour {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
  font-weight: 500;
  color: $color-base;
  letter-spacing: 0.5px;
}
.personal-info {
  background-color: transparent;
  font-size: 16px;
  color: $color-base;
  line-height: 20px;
}
.state {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 15px;
  font-weight: 500;
  text-transform: capitalize;
}
.detail {
  margin-top: 28px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  display: block;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.7px;
  .arrow {
    text-decoration: none;
    font-size: 19px;
    margin-left: 10px;
    color: $color-primary;
  }
}
.open {
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(79, 125, 219, 0.25);
  .pend {
    color: #4f7ddb;
  }
}
.canceled {
  background-color: #f1f1f1;
  .pend {
    color: rgba(21, 22, 61, 0.6);
  }
}
.closed {
  background-color: #e8f7f6;
  border: 1px solid $color-primary;
  box-shadow: none;
  .pend {
    color: rgba(88, 188, 129, 0.8);
  }
}
.check {
  width: 20px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  right: 16px;
  bottom: 13px;
  border-top-left-radius: 50px !important;
  border-top-right-radius: 50px !important;

  font-size: 16px;
  color: #fff;
  background: $color-primary;
}
</style>

<script>
import $backend from '@/services/backend'

export default {
  name: 'Dashboard',
  layout: 'null',
  components: {},
  async asyncData () {
    const {data} = await $backend.getVisits();
    const canceled = [], opened =[], closed = [];

    data.forEach(element => {
      if(element.state === 'CANCELADO'){
        
      }
      
    });
    return { title: 'data' }
  },
  data() {
    return {
      tab: null
    }
  }
}
</script>
