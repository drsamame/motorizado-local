<template>
  <div>
    <v-row>
      <v-tabs v-model="tab" centered grow>
        <v-tab @click="getByStatus('pendiente')">
          <h3 class="titleTab">
            PENDIENTES
          </h3>
        </v-tab>
        <v-tab @click="getByStatus('rechazada')">
          <h3 class="titleTab">
            CANCELADAS
          </h3>
        </v-tab>
        <v-tab @click="getByStatus('aplicada')">
          <h3 class="titleTab"> 
            APLICADAS
          </h3>
        </v-tab>
      </v-tabs>
    </v-row>

    <v-tabs-items v-model="tab" class=" mx-2">
      <v-tab-item class="pb-3 content-card">
        <v-card class="pa-5 open mt-4 card" v-for="card in opened" :key="card.id">
          <div class="d-flex justify-space-between">
            <h3 class="state pend">PENDIENTE</h3>
            <p class="hour">
              {{card.year}} - {{card.hour}}
              {{card.scheduled_date}}
            </p>
          </div>

          <div class="personal-info">
            {{card.address}}<br />
            {{card.contacts[0].full_name}}
          </div>
          <nuxt-link :to="{path: 'detail/'+card._id}" class="detail d-inline-flex align-items"
            >DETALLE <v-icon class="arrow">mdi-arrow-right</v-icon></nuxt-link
          >
        </v-card>
      </v-tab-item>
      <v-tab-item class="pb-3 content-card">
        <v-card class="pa-5 canceled mt-4 card" v-for="card in canceled" :key="card.id">
          <div class="d-flex justify-space-between">
            <h3 class="state pend">{{card.state}}</h3>
            <p class="hour">
              {{card.year}} - {{card.hour}}
            </p>
          </div>

          <div class="personal-info">
            {{card.direction}}<br />
            {{card.contact_name}}
          </div>
          <nuxt-link :to="{path: 'detail/'+card.id}" class="detail d-inline-flex align-items"
            >DETALLE <v-icon class="arrow">mdi-arrow-right</v-icon></nuxt-link
          >
          
        </v-card>
      </v-tab-item>
      <v-tab-item class="pb-3 content-card">
        <v-card class="pa-5 closed mt-4 card" v-for="card in closed" :key="card.id">
          <v-icon class="check">mdi-check</v-icon>
          <div class="d-flex justify-space-between">
            <h3 class="state pend">{{card.state}}</h3>
            <p class="hour">
              {{card.year}} - {{card.hour}}
            </p>
          </div>
          <div class="personal-info">
            {{card.direction}}<br />
            {{card.contact_name}}
          </div>
          <nuxt-link :to="{path: 'detail/'+card.id}" class="detail d-inline-flex align-items"
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
.v-card{
  &.open {
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(79, 125, 219, 0.25);
    .pend {
      color: #4f7ddb;
    }
  }
  &.canceled {
    background-color: #f1f1f1;
    .pend { 
      color: rgba(21, 22, 61, 0.6);
    }
  }
  &.closed {
    background-color: #e8f7f6;
    border: 1px solid $color-primary;
    box-shadow: none;
    .pend {
      color: rgba(88, 188, 129, 0.8);
    }
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
import { mapActions } from 'vuex'
import $backend from '@/services/backend'

export default {
  name: 'Dashboard',
  layout: 'null',
  components: {},
  async asyncData () {},
  mounted(){
    this.getByStatus('pendiente'); 
  },
  methods:{
    async getByStatus(type){
      console.log(type);
      const data = await $backend.getVisits(type);
      switch(type){
        case 'pendiente':
          this.opened = data.data.data;
          break;
        case 'rechazada':
          this.canceled = data.data.data;
          break;
        case 'aplicada':
          this.closed = data.data.data;
          break;
      }
      console.log(data);
    },
    ...mapActions({
      setVisitId: 'registerVisit/setVisitId',
    }),
  },
  data() {
    return {
      tab: null,
      canceled: [],
      opened: [],
      closed: [],
    }
  }
}
</script>
