<template>
  <div class="container main">
    <div class="text-h4 text-center">Profile</div>
    <q-separator class="q-mt-lg" size="2px"/>
  </div>

  <div class="row justify-center">
    <div class="col-12 col-sm-11 col-md-8 col-lg-6 q-pa-lg">
      <div class="row">
        <div class="col-12 q-px-lg text-center q-mb-lg">
          <q-avatar size="100px">
            <img class="cursor-pointer" src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <q-input label="First Name" model-value="" outlined/>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <q-input label="Last Name" model-value="" outlined/>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <q-select v-model="model" :options="options" label="Province" outlined transition-hide="jump-up"
                    transition-show="jump-up" use-input/>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <q-input
            v-model="phone"
            fill-mask
            label="Phone"
            mask="(##) ###-##-##"
            outlined
          />
        </div>
        <div class="col-12 q-pa-sm q-py-lg">
          <q-btn color="blue" class="col-12 col-sm-8 col-md-6 full-width" label="Save" @click="triggerPositive"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";
import { useQuasar } from 'quasar'

const $q = useQuasar()

function triggerPositive () {
  $q.notify({
    timeout: 1000,
    actions: [{ icon: 'close', color: 'white' }],
    type: 'positive',
    message: 'Your changes saved'
  })
}
const options = ref([
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
])

</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>
