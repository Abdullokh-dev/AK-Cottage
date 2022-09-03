<template>
  <div id="footer__mobile" class="lt-sm">
    <q-tabs
      v-model="tab"
      class="bg-grey-9 text-teal"
      indicator-color="white"
    >
      <q-tab @click="this.$router.push('/')" class="text-white q-px-none" icon="home" name="home" no-caps />
      <q-tab @click="this.$router.push('/favorites')" class="text-white q-px-none" icon="favorite" name="favorite" no-caps />
      <q-tab @click="this.$router.push('/cottage/add')" class="text-white q-px-none" icon="add" name="add" no-caps/>
      <q-tab class="text-white q-px-none" icon="chat" name="chat" no-caps />
      <q-tab @click="this.$router.push('/settings')" class="text-white q-px-none" icon="settings" name="settings" no-caps />
    </q-tabs>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "FooterMobile",
  components: {},
  setup() {
    return {
      tab: ref("contacts"),
    };
  }
};
</script>

<style scoped>

#footer__mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

</style>
