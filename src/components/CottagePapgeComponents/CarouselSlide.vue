<template>
  <div class="q-pa-md">
    <q-carousel
      class="rounded-borders "
      :class="{'carousel__desktop': !fullscreen}"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      v-model:fullscreen="fullscreen"
    >
      <q-carousel-slide
        v-for="cottage in cottages" :key="cottage.index"
        :name="cottage.id"
        :img-src="cottage.image"
        :style="{
          backgroundSize: fullscreen ? 'contain' : 'cover',
          backgroundRepeat: fullscreen && 'no-repeat'
        }"
      />

      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselSlide",
  props: {
    cottages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: 1,
      fullscreen: false,
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .carousel__desktop {
    width: 80%;
    margin: auto;
    height: 550px;
  }
}
</style>
