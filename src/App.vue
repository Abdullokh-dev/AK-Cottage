<template>
  <div>
    <q-layout class="shadow-2" container style="height: 100vh" view="lHh lpr lFf">
      <SignUpModalForm />
      <header-row @onClickSignIn="onClickRegister"/>

      <router-view/>

      <FooterDesktop/>
    </q-layout>
    <FooterMobile @onAddHome="onClickRegister"/>
  </div>
</template>
<script setup>

import HeaderRow from "components/HeaderRow";
import FooterDesktop from "components/FooterDesktop";
import FooterMobile from "components/FooterMobile";
import {changeVisibility} from "stores/ModalAuth";
import SignUpModalForm from "components/SignUpModalForm";

const visibleAuthModal = changeVisibility()

function onClickRegister() {
  visibleAuthModal.changeModalVisibility()
}
</script>
