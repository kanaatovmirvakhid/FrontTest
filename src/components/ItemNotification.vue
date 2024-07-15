<script setup lang="ts">
  import { ContentLoader } from 'vue-content-loader';
  </script>

<template>
    <div class="notification">
      <div class="notification__img">
        <img src="../assets/img/ImgBlur.png" alt="Notification Image">
      </div>
      <div class="notification__text">
        <div class="notification__title">
          <ContentLoader
            width="190"
            height="26"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
        </div>
        <div class="notification__p">
          <ContentLoader
            width="155"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="190"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="170"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="160"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="140"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
        </div>
        <div class="notification__subtitle">
          <ContentLoader
            width="80"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .notification {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 236px;
    width: 100%;
    padding: 18px 14px;
    border-radius: 12px;
    border: 1px solid #4D4D4D;
    background: #262626;
  
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  
    &__p {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }
  </style>