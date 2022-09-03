<template>
  <div class="container main" >
    <div class="text-h4 text-center">Support</div>
    <q-separator class="q-ma-lg" size="2px"/>
  </div>

  <div class="row justify-center">
    <div class="col-12 col-sm-10 col-md-7 q-pa-sm">
      <div class="row reverse">
        <div class="col-12 col-sm-6 q-pa-sm">
          <q-input outlined v-model="text" label="First Name"/>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <q-input outlined v-model="text" label="Last Name" />
        </div>
        <div class="col-12 q-pa-sm">
          <q-input outlined v-model="text" label="Email" />
        </div>
        <div class="col-12 q-pa-sm">
          <q-input
            v-model="text"
            label="Text"
            outlined
            type="textarea"
          />
        </div>
        <div class="col-12 col-sm-6 q-pa-sm float-right text-right">
          <q-btn color="green" label="Send" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  margin-top: 70px;
}

.q-btn {
  width: 100%;
}
</style>
