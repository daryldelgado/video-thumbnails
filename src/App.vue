<script setup lang="ts">
import MainLoader from '@/components/common/MainLoader.vue'
import Navigation from '@/components/common/Navigation.vue'
import PreviewDialog from '@/components/common/previewDialog.vue'
import { getDataStore } from '@/pinia/stores/getData'
import { onMounted } from 'vue';

onMounted(() => {
  const dataStore = getDataStore()
  dataStore.setThumbnails()
});
</script>

<template>
  <div id="appContent">
    <MainLoader></MainLoader>
    <Navigation></Navigation>
    <PreviewDialog/>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
  @import 'assets/styles/index';
</style>
