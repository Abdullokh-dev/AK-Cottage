<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <div class="col-12 col-sm-12 col-md-10 col-lg-10">
      <div class="row">
        <div v-for="n in 19" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md">
          <q-card class="my-card">
            <router-link to="/cottage">
              <q-img src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-12.jpg"/>
            </router-link>

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  House In Foxhall Ave, Kingston
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">289 Foxhall Ave, Kingston</div>
              <div class="text-grey text-caption q-mt-sm">
                <div class="col-10">
                  <q-icon color="blue" name="favorite" class="q-mr-xs" size="20px"/>
                  <span class="q-pr-md">{{$t('cottage.weeksAgo')}}</span>
                  <q-icon color="blue" name="mdi-eye" class="q-mr-xs" size="20px"/>
                  <span>{{$t('cottage.viewsCount')}}</span>
                </div>
              </div>
            </q-card-section>

            <q-separator/>

            <q-card-actions class="text-bold q-ml-sm q-py-md">
              <div class="col">
                $550 / day
              </div>
              <div class="col text-right q-mr-sm">
                <q-btn color="blue" class="q-mr-sm" @click="confirm = true" icon="delete" size="12px" outline round/>
                <q-btn to="/cottage/change/1" color="blue" icon="edit" size="12px" outline round/>
              </div>
            </q-card-actions>
          </q-card>
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
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const confirm = ref(false)




</script>

<style scoped>


</style>
