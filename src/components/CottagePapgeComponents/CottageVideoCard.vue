<template>
  <q-card bordered class="bg-white my-card">
    <q-card-section>
      <div class="text-h6">
        Video
      </div>
    </q-card-section>
    <div class="my-card" style="margin-bottom: 70px;">
      <q-video
        :ratio="16/9"
        src="https://www.youtube.com/embed/_6IO62oQfaU"
      />
    </div>
  </q-card>
</template>

<script>
export default {
  name: "CottageVideoCard"
}
</script>

<style scoped>
.my-card {
  margin: 16px 16px 16px 16px;
}

@media only screen and (min-width: 1024px) {
  .my-card {
    width: 78%;
    margin: 16px auto 20px auto;
  }
}
</style>
