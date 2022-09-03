<template>
  <div class="mail-carousel__card justify-end">
    <q-card class="my-card">
      <q-card-section class="q-pa-lg">
        <div class="text-h4 q-pb-sm">
          {{ card.name }}
          <div class="q-pb-md card__address">
            {{ card.address }}
          </div>
          <div class="row q-pb-sm card__info">
            <div class="col">
              <q-icon color="blue" name="bed" size="22px"/>
              <span>{{ card.countOfBeds }} pc</span></div>
            <div class="col">
              <q-icon color="blue" name="shower" size="22px"/>
              <span>{{ card.countOfBathrooms }} pc</span></div>
            <div class="col">
              <q-icon color="blue" name="home" size="22px"/>
              <span>{{ card.countOfRooms }} Br</span></div>
          </div>
          <q-separator/>
          <div class="q-mt-lg q-mr-lg text-right">
            <strong class="text-h5 text-weight-bolder">${{ card.price }} &nbsp;</strong><span
            class="card__price-info">/ in day</span>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  card: {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    countOfBeds: {
      type: Number,
      required: true
    },
    countOfBathrooms: {
      type: Number,
      required: true
    },
    countOfRooms: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
})
</script>

<style scoped>
.mail-carousel__card {
  position: absolute;
  top: 55%;
  right: 0;
  margin-right: 100px;
  max-width: 450px;
  min-width: 250px;
}

.card__price-info {
  font-size: 16px;
  color: #7e7e7e;
}

.card__info {
  color: #7e7e7e;
  font-size: 13px;
}
.card__info span {
  display: inline-block;
  margin-left: 5px;
}
.card__address {
  font-size: 14px;
  color: #7e7e7e;
}

@media only screen and (max-width: 600px) {
  .mail-carousel__card {
    position: relative;
    margin: -70% auto 0 auto;
  }
}
</style>
