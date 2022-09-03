<template>
  <q-header class="bg-grey-9 q-py-xs" elevated reveal>
    <q-toolbar>
      <q-btn to="/" flat icon="cottage" label="dacha" no-caps size="20px" />

      <q-tabs v-model="tab" class="gt-xs absolute-center" shrink stretch>
        <q-tab class="q-pa-sm" label="search" name="search" @click="isVisibleSearch = !isVisibleSearch" />
        <q-tab class="q-pa-sm" label="RUS" name="tab1" @click="$i18n.locale = 'ru-RUS'" />
        <q-tab class="q-pa-sm" label="UZB" name="tab3" @click="$i18n.locale = 'uz-UZB'" />
        <q-tab class="q-pa-sm lt-md" label="Sign In" name="tab3" @click="$emit('onClickSignIn')"/>
      </q-tabs>

      <div class="absolute-right">
        <q-btn class="gt-sm q-my-sm" flat icon="contacts" label="Sign In" no-caps @click="$emit('onClickSignIn')"/>
        <q-btn class="gt-xs q-my-sm q-mx-sm" to="/cottage/add" label="Add Cottage" no-caps outline />
        <q-btn class="lt-sm" flat icon="search" no-caps size="20px" @click="isVisibleSearch = !isVisibleSearch" />
      </div>
    </q-toolbar>

  </q-header>

  <search-row v-if="isVisibleSearch" />
</template>

<script>

import SearchRow from "components/SearchRow";

export default {
  name: "HeaderRow",
  data() {
    return {
      isVisibleSearch: false
    };
  },
  components: {
    SearchRow
  }
};
</script>

<style scoped>

</style>
