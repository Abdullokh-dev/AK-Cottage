<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col">
      <div class="row">
        <div v-for="n in 10" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm">
          <q-card class="my-card">
            <router-link to="/cottage">
              <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg"/>
            </router-link>

            <q-card-section>
              <q-btn
                class="absolute"
                color="blue"
                fab
                icon="place"
                style="top: 0; right: 12px; transform: translateY(-50%);"
              />

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  House In Foxhall Ave, Kingston
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="place"/>
                  250 ft
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">289 Foxhall Ave, Kingston</div>
              <div class="text-caption text-grey">
                <q-icon color="blue" name="bed" size="20px"/><span class="icon__text">3Br</span>
                <q-icon color="blue" name="people" size="20px"/><span class="icon__text">3Br</span>
                <q-icon color="blue" name="liquor" size="20px"/><span class="icon__text">3Br</span>
              </div>
            </q-card-section>

            <q-separator/>

            <q-card-actions class="text-bold q-ml-sm q-py-md">
              <div class="col">
                $550 / day
              </div>
              <div class="col text-right q-mr-sm">
                <q-btn color="grey" icon="star" outline round/>
              </div>
            </q-card-actions>

          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentRow"
};
</script>

<style scoped>
.items-start {
  margin-top: 40px;
  padding-bottom: 60px;
}
.icon__text {
  margin: 0 10px 0 3px;
}
</style>
