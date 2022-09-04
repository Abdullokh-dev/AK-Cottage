<template>
  <home-page-main-carousel />
  <div class="q-pa-md row items-start q-gutter-md card__container">
    <div class="col">
      <div class="row">
        <div v-for="n in 10" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md">
          <CottageCard :cottage="cottage" @onClickAddFavorite="addFavorite"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomePageMainCarousel from "components/HomePageMainCarousel";
import CottageCard from "components/CottageCard";

import {reactive} from "vue";
const cottage = reactive({
  icon: 'star',
  color: 'grey'
})

function addFavorite() {
  console.log('favorite ga qo\'shish kerak')
}

</script>

<style scoped>
.items-start {
  margin-top: 40px;
  padding-bottom: 60px;
}

@media only screen and (min-width: 1024px) {
  .card__container {
    width: 90%;
    margin: 40px auto 0 auto;
  }
}
@media only screen and (min-width: 1440px) {
  .card__container {
    width: 80%;
  }
}
</style>
