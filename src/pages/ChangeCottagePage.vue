<template>
  <div class="q-pa-md row text-center">
    <div class="col-0 col-sm-2 col-md-3"></div>
    <div class="col-12 col-sm-8 col-md-6">
      <h3>Change cottage</h3>
      <q-input outlined v-model="text" label="Name"/>
      <q-input class="q-mt-lg" autogrow v-model="text" outlined type="textarea" label="Description"/>
      <q-select class="q-mt-lg" outlined v-model="model" use-input :options="options" transition-show="jump-up"
                transition-hide="jump-up" label="Province"/>
      <q-select class="q-mt-lg" outlined v-model="model" :options="options" @filter="filterFn" transition-show="jump-up"
                transition-hide="jump-up" label="District"/>
      <q-input class="q-mt-lg" autogrow v-model="text" outlined type="textarea" label="Reference point"/>
      <q-input class="q-mt-lg" autogrow v-model="text" outlined type="textarea" label="Location"/>
      <q-input class="q-mt-lg" v-model="text" outlined type="number" label="Max Persons"/>
      <q-input class="q-mt-lg" v-model="text" outlined type="number" label="Count rooms"/>
      <q-input class="q-mt-lg" v-model="text" outlined type="number" label="Count beds"/>
      <q-select class="q-mt-lg" outlined v-model="model" :options="options" transition-show="jump-up"
                transition-hide="jump-up" label="Terms"/>
      <q-select
        transition-show="jump-up"
        transition-hide="jump-up"
        class="q-mt-lg"
        v-model="modelMultiple"
        multiple
        :options="options"
        use-chips
        outlined
        label="Multiple selection"
      />
      <q-input
        class="q-mt-lg"
        outlined
        v-model="phone"
        label="Phone"
        mask="(###) ##-###-##-##"
        fill-mask
      />
      <q-input
        class="q-mt-lg"
        outlined
        v-model="phone"
        label="Additional Phone"
        mask="(###) ##-###-##-##"
        fill-mask
      />

      <q-select class="q-mt-lg" outlined v-model="model" use-input :options="options" transition-show="jump-up"
                transition-hide="jump-up" label="Weekend days"/>
      <q-input class="q-mt-lg" v-model="text" outlined type="number" label="Week day price"/>
      <q-input class="q-mt-lg" v-model="text" outlined type="number" label="Weekend price"/>

      <div class="q-mt-lg col-12"
           style="font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: bold;">
        Soat <span class="text-blue">{{ entryTime }}</span> dan <span class="text-blue">{{ exitTime }}</span> gacha
      </div>
      <div class="justify-between row">
        <q-input class="col-5" outlined v-model="entryTime" color="blue" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon color="blue" name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time color="blue" v-model="entryTime" format24h >
                  <div class="row items-center justify-end">
                    <q-btn text-color="blue" v-close-popup label="Close" color="blue" flat/>
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input class="col-5" outlined v-model="exitTime" color="blue" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon color="blue" name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time color="blue" v-model="exitTime" format24h >
                  <div class="row items-center justify-end">
                    <q-btn text-color="blue" v-close-popup label="Close" color="primary" flat/>
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="row justify-between">
        <div class="q-mt-lg col-12 col-md-5">
          <q-uploader
            accept="image"
            url="http://localhost:4444/upload"
            label="Card image"
            color="blue"
            style="width: 100%"
          />
        </div>

        <div class="q-mt-lg col-12 col-md-5">
          <q-uploader
            accept="image"
            url="http://localhost:4444/upload"
            label="Cottage images"
            multiple
            color="blue"
            style="width: 100%"
          />
        </div>
      </div>

      <q-input class="q-mt-lg" autogrow v-model="text" outlined type="textarea" label="YouTube link"/>

      <div class="text-left">
        <q-toggle
          class="q-mt-lg"
          v-model="isAlcoholDrink"
          :label="'alcohol ' + isAlcohol"
          :style="{color: isAlcoholDrink ? color : 'black'}"
          color="blue"
          icon="liquor"
          size="50px"
          style="font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: bold;"
        />
      </div>
    </div>
    <q-btn color="blue" class="col-12 col-sm-8 col-md-6" label="Save" style="margin: 10px auto 70px auto"/>
  </div>
</template>

<script setup>
import {ref, reactive, computed} from "vue";

const isAlcoholDrink = ref(false)
const color = ref('#2196F3')
const isAlcohol = computed(() => {
  return isAlcoholDrink.value ? "permitted" : "not permitted"
})
const options = ref([
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
])
const entryTime = ref('18:00')
const exitTime = ref('17:00')
const id = ref(null)
const phone = ref(null)

</script>

<style scoped>

</style>