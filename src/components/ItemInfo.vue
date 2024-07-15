<script setup lang="ts">
import { defineEmits } from 'vue';
import { ContentLoader } from 'vue-content-loader';

const emits = defineEmits(['close']);
</script>

<template>
  <div class="info">
    <div class="info__text">
      <ContentLoader
        class="info__loader"
        width="100%"
        height="36"
        primaryColor="#3C3C3C"
        secondaryColor="#444444"
        :speed="4"
      ></ContentLoader>
    </div>
    <div class="info__close" @click="emits('close')">
      <img src="../assets/icons/carbon_close.svg" alt="Close">
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #4d4d4d;
  background: #262626;

  &__text {
    border-radius: 12px;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }

  &__close {
    align-self: flex-start;
    cursor: pointer;
    flex-shrink: 0;
    transform: translate(10px, -10px);
  }
}

@media (max-width: 530px) {
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid #4d4d4d;
    background: #262626;

    &__loader {
      height: 30px !important;
    }
  }
}
</style>