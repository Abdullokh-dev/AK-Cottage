<template>
  <q-card bordered class="bg-white my-card">
    <q-card-section>
      <div class="text-h6">
        Overview
      </div>
    </q-card-section>

    <ul>
      <li>
        <div class="row">
          <div v-for="overview in overviews" :key="overview.index" class="col-12 col-sm-6 col-md-4 col-lg-3 q-py-sm">
            <div class="row items-center">
              <div class="col-2">
                <q-icon color="blue" :name="overview.icon" size="32px"/>
              </div>
              <div class="col-9">
                <div class="overview__type">{{overview.name}}</div>
                <div class="overview__value">{{ overview.value }}</div>
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
    overviews: {
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

li .col-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
  max-height: 52px;
  max-width: 52px;
  border: white solid 1px;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 7%);
  border-radius: 5px;
  margin-right: 10px;
}

.overview__type {
  color: #7e7e7e;
  padding-bottom: 4px;
}

.overview__value {
  font-weight: 800;
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
}
</style>
