<script setup lang="ts">
import { ref } from 'vue';
import ItemNotification from './components/ItemNotification.vue';
import ItemInfo from './components/ItemInfo.vue';
import InventaryFields from './components/InventaryFields.vue';

const isItemNotificationOpen = ref(true);

function closeModal() {
  isItemNotificationOpen.value = false;
}
</script>

<template>
    <div class="container">
      <div class="inventary__top">
        <ItemNotification />
        <InventaryFields />
      </div>
      <div class="inventary__bottom">
        <ItemInfo v-if="isItemNotificationOpen" @close="closeModal()" />
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .container {
    max-width: 785px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .inventary__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
  }
  
  @media (max-width: 700px) {
    .inventary__top {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
    }
  }
  </style>