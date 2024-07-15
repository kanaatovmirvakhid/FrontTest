<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";
import { ContentLoader } from "vue-content-loader";
import { IField } from "../types/ITypes";
import InputNumber from "primevue/inputnumber";

const emits = defineEmits<{
  close: [];
  removeItem: [inputValue: number, itemOrder: number];
}>();

const props = defineProps<{
  item: IField;
}>();

const enum ModalStep {
  Prepare = "prepare",
  Count = "count",
}

const inputValue = ref();

const currentStep = ref<ModalStep>(ModalStep.Prepare);

function nextStep() {
  currentStep.value = ModalStep.Count;
}
function removeItem() {
  emits("removeItem", inputValue.value, props.item.order);
  emits("close");
}
const inputStyle = {
  width: "100%",
  padding: "11px 12px",
  background: "none",
  border: "1px solid #4D4D4D",
  borderRadius: "4px",
  fontFamily: "'Inter', sans-serif",
  color: "#FFF",
  MozAppearance: "textfield",
  WebkitAppearance: "none",
  "&::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
  },
  "&::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
  },
  "&::-webkit-input-placeholder": {
    color: "#7d7d7d",
  },
};
</script>

<template>
  <div class="container">
    <aside class="modal">
      <div class="modal__close" @click="emits('close')">
        <img src="../assets/icons/carbon_close.svg" alt="Close" />
      </div>
      <div class="modal__img">
        <img :src="props.item.img" alt="Image of item" />
      </div>
      <div class="modal__content">
        <div class="modal__title">
          <ContentLoader
            width="100%"
            height="30"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
        </div>
        <div class="modal__p">
          <ContentLoader
            width="100%"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="100%"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="100%"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="180"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
          <ContentLoader
            width="80"
            height="10"
            primaryColor="#3C3C3C"
            secondaryColor="#444444"
            :speed="4"
          ></ContentLoader>
        </div>
      </div>
      <div
        class="modal__prepare prepare"
        v-if="currentStep === ModalStep.Prepare"
      >
        <button class="prepare__button" @click="nextStep()">
          Удалить предмет
        </button>
      </div>
      <div
        class="modal__count count"
        v-else-if="currentStep === ModalStep.Count"
      >
        <InputNumber
          placeholder="Введите количество"
          :inputStyle="inputStyle"
          :step="1"
          v-model="inputValue"
          inputId="minmax"
          :min="0"
          :max="props.item.count"
          fluid
        />
        <div class="count__buttons">
          <button class="count__cancel" @click="emits('close')">Отмена</button>
          <button class="count__confirm" @click="removeItem()">
            Подтвердить
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.modal {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 250px;
  width: 100%;
  padding: 25px 15px 20px 15px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 3;
  border: 1px solid #4d4d4d;
  background: #262626;
  &__close {
    cursor: pointer;
    position: absolute;
    top: 14px;
    right: 14px;
  }
  &__img {
    padding: 30px 45px 30px 45px;
    border-bottom: 1px solid #4d4d4d;
    flex-shrink: 0;
    img {
      text-align: center;
      width: 130px;
      height: 130px;
      object-fit: cover;
    }
  }
  &__content {
    overflow: scroll;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    flex-grow: 1;
    padding-top: 16px;
    padding-bottom: 24px;
  }
  &__p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  &__prepare {
    width: 100%;
    flex-shrink: 0;
    padding-top: 18px;
    border-top: 1px solid #4d4d4d;
  }
  &__count {
    width: 100%;
    flex-shrink: 0;
    padding-top: 20px;
    border-top: 1px solid #4d4d4d;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
.prepare {
  &__button {
    font-family: "San Francisco Pro Display", sans-serif;
    width: 100%;
    padding-top: 11px;
    padding-bottom: 11px;
    font-size: 14px;
    background-color: #ff8888;
    border-radius: 8px;
    color: #ffffff;
  }
}
.count {
  &__cancel {
    flex-grow: 1;
    padding: 8px;
    font-family: "San Francisco Pro Display", sans-serif;
    font-size: 14px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 20px 10px rgba(250, 114, 114, 0.2);
    -moz-box-shadow: 0px 0px 20px 10px rgba(250, 114, 114, 0.2);
    box-shadow: 0px 0px 20px 10px rgba(250, 114, 114, 0.2);
  }
  &__confirm {
    flex-grow: 1;
    padding: 8px;
    font-family: "San Francisco Pro Display", sans-serif;
    font-size: 14px;
    border-radius: 8px;
    color: #fff;
    background-color: #fa7272;
    -webkit-box-shadow: 0px 0px 20px 10px rgba(250, 114, 114, 0.2);
    -moz-box-shadow: 0px 0px 20px 10px rgba(250, 114, 114, 0.2);
    box-shadow: 0px 0px 20px 10px rgba(250, 114, 114, 0.2);
  }
  &__buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
}
@media (max-width: 480px) {
  .modal {
    &__img {
      width: 100%;
      padding: 15px 30px 25px 30px;
      border-bottom: 1px solid #4d4d4d;
      flex-shrink: 0;
      img {
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
        text-align: center;
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }
  }
}
</style>
