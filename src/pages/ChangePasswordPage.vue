<template>
  <div class="container main relative-position">
    <div class="text-h4 text-center">Change password</div>
    <q-separator class="q-ma-lg" size="2px"/>
  </div>
  <div class="row justify-center">
    <div class="col-12 col-sm-10 col-md-7 col-lg-6">
      <div class="row reverse">
        <div class="col-12 q-px-lg q-py-sm">
          <q-input v-model="text" label="Old password" outlined type="password"/>
        </div>
        <div class="col-12 q-px-lg q-py-sm">
          <q-input v-model="text" label="Ne password" outlined type="password"/>
        </div>
        <div class="col-12 q-px-lg q-py-sm">
          <q-input v-model="text" label="Confirm new password" outlined type="password"/>
        </div>
        <div class="col-12 col-sm-6 col-md-4 q-px-lg q-py-lg">
          <q-btn color="green" label="Send" @click="triggerPositive"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

function triggerPositive () {
  $q.notify({
    timeout: 1000,
    actions: [{ icon: 'close', color: 'white' }],
    type: 'positive',
    message: 'Password Changed'
  })
}
</script>

<style scoped>
.container {
  margin-top: 100px;
}
.q-btn {
  width: 100%;
}
</style>
