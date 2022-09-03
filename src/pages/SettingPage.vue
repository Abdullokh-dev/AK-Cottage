<template>
  <div class="container main" >
    <div class="text-h4 text-center">Settings</div>
    <q-separator class="q-ma-lg" size="2px"/>
  </div>
  <div class="row justify-center">
    <div class="col-12 col-sm-9 col-md-7 md-text-h6">
      <div class="q-pa-md q-gutter-md">
        <q-list separator>
          <q-item clickable v-ripple to="/cottage/my">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-scroll" color="blue" />

            </q-item-section>
            <q-item-section>My Ads</q-item-section>
            <q-item-section side class="text-blue">27</q-item-section>
          </q-item>

          <q-item clickable @click="alert = true" v-ripple active-class="text-orange">
            <q-item-section avatar>
              <q-icon name="language" color="blue" />
            </q-item-section>
            <q-item-section>Language</q-item-section>
            <q-item-section side class="text-blue">eng</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-orange">
            <q-item-section avatar>
              <q-icon name="security" color="blue" />
            </q-item-section>
            <q-item-section>Security</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-orange">
            <q-item-section avatar>
              <q-icon name="support_agent" color="blue" />
            </q-item-section>
            <q-item-section>Support</q-item-section>
          </q-item>

          <q-item clickable v-ripple active-class="text-orange">
            <q-item-section avatar>
              <q-icon name="privacy_tip" color="blue" />
            </q-item-section>
            <q-item-section>Privacy policy</q-item-section>
          </q-item>

          <q-separator />
        </q-list>
      </div>
    </div>
  </div>

  <q-dialog v-model="alert">
    <q-card style="width: 300px">
      <q-card-section class="text-center">
        <div class="text-h6">Choose language</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none">

        <div class="col">
          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="ru" label="Russian" />
          <q-separator />
        </div>
        <div class="col">
          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="eng" label="English" />
          <q-separator />
        </div>
        <div class="col">
          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="uz" label="Uzbek" />
          <q-separator />
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="blue" v-close-popup />
        <q-btn flat label="OK" color="blue" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>

import {ref} from "vue";

const alert = ref(false)
const shape = ref('line')

</script>

<style scoped>
.container {
  margin-top: 70px;
}

.q-item {
  padding: 20px;
}
</style>
