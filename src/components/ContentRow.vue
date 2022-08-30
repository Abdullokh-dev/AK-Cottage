<template>
  <div class="q-pa-md row items-start q-gutter-md card__container">
    <div class="col">
      <div class="row">
        <div v-for="n in 10" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3 q-pa-md">
          <q-card class="my-card">
            <router-link to="/cottage">
              <q-img src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-12.jpg"/>
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
