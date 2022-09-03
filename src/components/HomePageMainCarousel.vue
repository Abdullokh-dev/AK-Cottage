<template>
  <div class="q-pa-md main-carousel__container">
    <q-carousel
      v-model="slide"
      animated
      arrows
      class="carousel"
      infinite
      swipeable
    >

      <q-carousel-slide :name="1" :img-src="cards[0].img">
        <MainCarouselCard :card="cards[0]"/>
      </q-carousel-slide>
      <q-carousel-slide :name="2" :img-src="cards[1].img">
        <MainCarouselCard :card="cards[1]"/>
      </q-carousel-slide>
      <q-carousel-slide :name="3" :img-src="cards[2].img">
        <MainCarouselCard :card="cards[2]"/>
      </q-carousel-slide>
      <q-carousel-slide :name="4" :img-src="cards[3].img">
        <MainCarouselCard :card="cards[3]"/>
      </q-carousel-slide>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, soluta?

    </q-carousel>
  </div>


</template>

<script>
import {ref} from 'vue'
import MainCarouselCard from "components/MainCarouselCard";

export default {
  components: {MainCarouselCard},
  setup() {
    return {
      slide: ref(1),
      cards: [
        {
          name: 'Park Of Avenue The Number',
          address: 'New York St 54',
          countOfBeds: 4,
          countOfBathrooms: 3,
          countOfRooms: 2,
          price: 150,
          img: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/demo1-single-property-01.jpg'
        },
        {
          name: 'Lux Home by Andy Lorem ipsum dolor sit amet',
          address: 'Colorado state 29 street',
          countOfBeds: 2,
          countOfBathrooms: 5,
          countOfRooms: 2,
          price: 180,
          img: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-05.jpg'
        },
        {
          name: 'New line Big Home consectetur adipisicing elit',
          address: 'Orlando street 24',
          countOfBeds: 1,
          countOfBathrooms: 4,
          countOfRooms: 2,
          price: 122,
          img: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-06.jpg'
        },
        {
          name: 'Home My Dream',
          address: 'New York St 22',
          countOfBeds: 7,
          countOfBathrooms: 4,
          countOfRooms: 2,
          price: 250,
          img: 'https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-07.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.main-carousel__container {
  margin: 59px 0 20px 0;
  padding: 0;
  width: 100%;
}

.carousel {
  height: 100vh;
}
</style>
