<script setup lang="ts">
import { defineProps } from 'vue';
import { IField } from '../types/ITypes';

const props = defineProps<{
  field: IField;
}>()
</script>

<template>
  <div class="item">
    <div class="item__img">
      <img :src="props.field.img" alt="Item">
    </div>
    <div class="item__count">{{ props.field.count }}</div>
  </div>
</template>

<style scoped lang="scss">
.item {
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &__img {
    width: 54px;
    height: 54px;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__count {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2px 4px;
    color: #7d7d7d;
    font-family: 'Inter', sans-serif;
    border-top: 1px solid #4D4D4D;
    border-left: 1px solid #4D4D4D;
    border-top-left-radius: 6px;
  }
}

@media (max-width: 480px) {
  .item {
    &__img {
      width: 40px;
      height: 40px;
      margin-left: 50%;
      margin-top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>