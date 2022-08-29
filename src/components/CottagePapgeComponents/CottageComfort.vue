<template>
  <q-card bordered class="bg-white my-card">
    <q-card-section>
      <div class="text-h6">
        Features
      </div>
    </q-card-section>

    <ul>
      <li>
        <div class="row">
          <div v-for="feature in features" :key="feature.index" class="col-12 col-sm-6 col-md-4 col-lg-3 q-py-sm">
            <div class="row items-center">
              <div class="col-1">
                <q-icon color="blue" name="check" size="20px"/>
              </div>
              <div class="col-9">
                <div class="overview__type">{{feature.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </q-card>
</template>

<script>
export default {
  name: "CottageOverview",
  props: {
    features: {
      type: Array,
      required: true
    }
  }
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

.overview__type {
  color: #7e7e7e;
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
}
</style>
