<template>
  <q-card bordered class="bg-white my-card">
    <q-card-section>
      <div class="text-h6">
        Address
      </div>
    </q-card-section>

    <ul>
      <li>
        <div class="row">
          <div class="col-12 col-sm-6 q-pa-xs">
            <strong class="q-mr-md">Address:</strong>
            <span>39-11 61st St, Motrid, Samarqand</span>
          </div>
          <div class="col-12 col-sm-6 q-pa-xs">
            <strong class="q-mr-md">Country:</strong>
            <span>O'zbekiston</span>
          </div>
          <div class="col-12 col-sm-6 q-pa-xs">
            <strong class="q-mr-md">Province/State:</strong>
            <span>Samarqand</span>
          </div>
          <div class="col-12 col-sm-6 q-pa-xs">
            <strong class="q-mr-md">City/Town:</strong>
            <span>Samarqand shahar</span>
          </div>
          <div class="col-12 col-sm-6 q-pa-xs">
            <strong class="q-mr-md">Neighborhood:</strong>
            <span>Yangiobod mahalla</span>
          </div>
        </div>
      </li>
    </ul>

  </q-card>
</template>

<script>
export default {
  name: "CottageAddressCard"
}
</script>

<style scoped>
.my-card {
  margin: 16px 16px 16px 16px;
}

ul {
  margin-top: -5px;
}

li {
  list-style-type: none;
  margin: 10px 0 10px -22px;
}

li span {
  color: #7e7e7e;
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
}
</style>
