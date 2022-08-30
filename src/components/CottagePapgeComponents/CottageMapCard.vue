<template>
  <q-card bordered class="bg-white my-card">
    <q-card-section>
      <div class="text-h6">
        Location Of Cottage
      </div>
    </q-card-section>
    <div class="my-card" style="margin-bottom: 70px;">
      <GMapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%;"
        class="map__card"
      >
        <GMapCluster>
          <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GMapCluster>
      </GMapMap>
    </div>
  </q-card>
</template>
<script>

export default {
  data() {
    return {
      center: {lat: 41.2994958, lng: 69.2400734},
      markers: [
        {
          position: {
            lat: 41.2994958, lng: 69.2400734
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>

<style scoped>
.my-card {
  margin: 16px 16px 70px 16px;
}

@media only screen and (max-width: 600px) {
  .map__card {
    height: 250px
  }
}

@media only screen and (min-width: 600px) {
  .map__card {
    height: 400px
  }
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
  .map__card {
    height: 500px;
  }
}
</style>
