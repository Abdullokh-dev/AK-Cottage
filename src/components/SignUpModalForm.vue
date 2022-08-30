<template>
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section class="q-pt-none">
        <q-tabs
          v-model="tabModal"
          active-color="primary"
          align="justify"
          class="text-grey q-mt-lg"
          dense
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab label="Sign In" name="SignIn"/>
          <q-tab label="Sign Up" name="SignUp"/>
        </q-tabs>

        <q-separator class="q-mt-lg"/>

        <q-tab-panels v-model="tabModal" animated>
          <q-tab-panel name="SignUp">
            <div class="text-h6 q-pb-sm">
              Register
            </div>
            <form action="">
              <div class="row">
                <div class="col-12 q-py-sm">
                  <q-input
                    v-model="form.email"
                    :rules="[ val => val.length >= 6 || 'Please use maximum 3 characters']"
                    label="Email"
                    mask="email"
                    outlined
                    type="email"
                  />
                </div>
                <div class="col-12 q-pb-sm">
                  <q-input
                    v-model="form.password"
                    :rules="[ val => val.length >= 6 || 'Please use maximum 3 characters']"
                    label="Password"
                    outlined
                    type="password"
                  />
                </div>
                <div class="col-12 q-p-sm">
                  <q-input
                    v-model="form.password"
                    :rules="[ val => val.length >= 6 || 'Please use maximum 3 characters']"
                    label="Confirm password"
                    outlined
                    type="password"
                  />
                </div>
              </div>
            </form>
          </q-tab-panel>

          <q-tab-panel name="SignIn">
            <div class="text-h6 q-pb-sm">
              Log In
            </div>
            <form action="">
              <div class="row">
                <div class="col-12 q-py-sm">
                  <q-input v-model="form.email" label="Email" outlined type="email"/>
                </div>
                <div class="col-12">
                  <q-input v-model="form.password" label="Password" outlined type="password"/>
                </div>
              </div>
            </form>
          </q-tab-panel>

        </q-tab-panels>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" flat label="OK"/>
        <q-btn v-close-popup color="primary" flat label="Close"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {changeVisibility} from "stores/ModalAuth";

const alert = ref(changeVisibility().getModalVisible)
const form = reactive({
  email: ref(''),
  password: ref('')
})
const tabModal = ref('SignIn')
changeVisibility().$onAction(() => {
  alert.value = true
})
</script>
