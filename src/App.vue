<template>
  <sign-up-modal-form />
  <q-layout class="shadow-2 wrapper" view="lHh lpr lFf">
    <div class="__header">
      <header-row @onClickSignIn="onClickRegister"/>
    </div>
    <div class="__main">
      <router-view/>
    </div>
    <div class="__footer">
      <FooterDesktop/>
      <FooterMobile @onAddHome="onClickRegister"/>
    </div>
  </q-layout>
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
<style>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.__main{
  flex: 1 1 auto;
}
</style>
