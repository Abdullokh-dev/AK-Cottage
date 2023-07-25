<template>
  <q-card bordered class="bg-white my-card">

    <q-card-section>
      <div class="row items-center">
        <div class="col-10">
            <q-icon color="blue" name="mdi-clock" class="q-mr-xs" size="20px"/>
            <span class="q-pr-md">{{$t('cottage.weeksAgo')}}</span>
            <q-icon color="blue" name="mdi-eye" class="q-mr-xs" size="20px"/>
            <span>{{$t('cottage.viewsCount')}}</span>
        </div>
        <div class="col-2 text-right">
          <q-btn color="grey" icon="star" outline round size="10px"/>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row">
        <div class="col-10">
          <div class="text-h6">City Flat</div>
          <div class="text-subtitle2">By Abdullokh Khamzaev</div>
        </div>
        <div class="col-2 text-center">
          <div class="text-h6"> 1200$</div>
        </div>
      </div>
    </q-card-section>

    <q-separator/>

    <q-card-section>
      <p class="text-h6">Description</p>
      <div>
        Beautiful two-bedroom city flat five minutes' walk from the cathedral. Fully equipped kitchen, living room with a large sofa and chairs, big TV and balcony. The balcony has space for four people to sit and gets the sun in the mornings, and the flat is light and warm. It has Wi-Fi and fast internet. The upstairs bedroom sleeps four people, with two double beds; the downstairs bedroom sleeps two in single beds. The flat is perfect for families and is near shops, bars and restaurants.
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CottageNameCard"
}
</script>

<style scoped>
.my-card {
  margin: 16px;
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
}
</style>
