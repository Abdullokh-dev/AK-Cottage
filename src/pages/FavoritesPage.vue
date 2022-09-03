<template>
  <div class="container main" >
    <div class="text-h4 text-center">Favorites</div>
    <q-separator class="q-ma-lg" size="2px"/>
  </div>

  <!--  <div class="row items-center" style="height: 800px">-->
  <!--    <div class="col text-center">-->
  <!--      <h1>Nothing to see</h1>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <div class="col-12 col-sm-12 col-md-10 col-lg-10">
      <div class="row">
        <div v-for="n in 19" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md">
          <CottageCard :cottage="cottage" @onClickDelete="confirm = true" />
        </div>
      </div>
    </div>
  </div>

  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="confirm" >
      <q-card style="width: 350px">
        <q-card-section class="row items-center">
          <span class="q-ml-sm text-subtitle1">Do you really want to delete?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn outline label="Cancel" color="blue" v-close-popup />
          <q-btn unelevated label="Yes" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

</template>

<script setup>
import CottageCard from "components/CottageCard";

import {reactive, ref} from "vue";
const cottage = reactive({
  icon: 'delete',
  color: 'blue'
})

const confirm = ref(false)

</script>

<style scoped>
.items-start {
  margin-bottom: 30px;
}
.container {
  margin-top: 70px;
}

</style>
