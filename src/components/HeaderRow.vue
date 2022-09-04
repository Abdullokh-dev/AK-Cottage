<template>
  <q-header class="bg-grey-9 q-py-md" elevated reveal>
    <q-toolbar>
      <q-btn to="/" flat icon="cottage" no-caps size="20px" />

      <q-tabs v-model="tab" class="gt-xs" shrink stretch>
        <q-btn label="Search" no-caps @click="isVisibleSearch = !isVisibleSearch" flat icon-right="search"/>
        <q-btn v-if="isAuthorized" label="Favorites" no-caps to="/favorites" flat icon-right="favorite"/>
        <q-btn v-if="!isAuthorized" class="q-pa-sm lt-md" no-caps label="Sign In" icon-right="contacts" name="tab3" @click="$emit('onClickSignIn')" flat/>
      </q-tabs>

      <div class="absolute-right">
        <q-btn v-if="!isAuthorized" class="gt-sm q-my-sm" flat icon="contacts" label="Sign In" no-caps @click="$emit('onClickSignIn')"/>
        <q-btn-dropdown icon="language" size="18px" flat class="q-pa-none">
          <q-list>
            <q-item clickable v-close-popup @click="$i18n.locale = 'en-EN'" >
              <q-item-section>
                <q-item-label>Eng</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-close-popup @click="$i18n.locale = 'ru-RUS'">
              <q-item-section>
                <q-item-label>Ru</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-close-popup @click="$i18n.locale = 'uz-UZB'">
              <q-item-section>
                <q-item-label>Uz</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn v-if="isAuthorized" icon="settings" size="17px" flat to="/settings" class="gt-xs setting-icon"/>
        <q-btn class="gt-xs q-my-sm q-mx-sm" to="/cottage/add" label="Add Cottage" no-caps outline />
        <q-btn class="lt-sm" flat icon="search" no-caps size="20px" @click="isVisibleSearch = !isVisibleSearch" />
      </div>
    </q-toolbar>

  </q-header>

  <search-row v-if="isVisibleSearch" />
</template>

<script setup>
import SearchRow from "components/SearchRow";
import {ref} from "vue";

const isVisibleSearch = ref(false)
const isAuthorized = ref(true)

</script>

<style scoped>

.gt-xs {
  margin-top: 4px;
}

.setting-icon {
  padding-bottom: 9px;
}

.q-icon {
  padding: 0 10px 0 3px;
}

</style>
