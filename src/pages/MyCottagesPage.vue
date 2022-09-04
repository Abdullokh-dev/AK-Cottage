<template>
  <div class="container main" >
    <div class="text-h4 text-center">My Cottages</div>
    <q-separator class="q-ma-lg" size="2px"/>
  </div>

<!--  <div class="row items-center" style="height: 800px">-->
<!--    <div class="col text-center">-->
<!--      <h1>Nothing to see</h1>-->
<!--    </div>-->
<!--  </div>-->
  <MyCottageCard />

</template>

<script>
import MyCottageCard from "components/MyCottagePageComponents/MyCottageCard";
export default {
  name: "MyCottagesPage",
  components: {MyCottageCard}
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.main {
  flex: 1 1 auto;
}
</style>
