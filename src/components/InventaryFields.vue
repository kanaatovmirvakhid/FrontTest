<script setup lang="ts">
import { onMounted, Transition, ref } from 'vue'
import AsideModal from './AsideModal.vue'
import FieldItem from './FieldItem.vue'
import greenItemImg from '@/assets/img/green-item.png';
import yellowItemImg from '@/assets/img/yellow-item.png';
import blueItemImg from '@/assets/img/blue-item.png';
import { IField } from '../types/ITypes';

let selectedItem = ref<IField | null>(null);

const items = ref<(IField)[]>([]);

function loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
        items.value = JSON.parse(storedItems);
    } else {
        items.value = [
            {
                img: greenItemImg,
                count: 4,
                order: 1
            },
            {
                img: yellowItemImg,
                count: 2,
                order: 2
            },
            {
                img: blueItemImg,
                count: 5,
                order: 3
            }
        ];
    }
}

onMounted(() => {
    loadItemsFromLocalStorage();
});

function onDragStart(e: DragEvent, item: IField){
    if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('itemId', item.order.toString());
    }
}
function onDragDrop(e: DragEvent, fieldsId: number){
    const itemIdStr = e.dataTransfer?.getData('itemId');
    if (itemIdStr) {
        const itemId = parseInt(itemIdStr);
        const item = items.value.find(x => x.order === itemId);
        let isFieldFree = true
        for(let item of items.value){
            if(item.order === fieldsId){
                isFieldFree = false
            }
        }
        if (item && isFieldFree) {
            item.order = fieldsId;
            localStorage.setItem('items', JSON.stringify(items.value));
        }
    }
}

function openAsideModal(clickedItem: IField) {
    if (selectedItem.value && selectedItem.value.order === clickedItem.order) {
        return;
    }
    selectedItem.value = null;
    setTimeout(() => {
        selectedItem.value = clickedItem;
    }, 300);
}
function closeModal(){
    selectedItem.value = null
}
function removeItem(count: number, itemOrder: number){
    const item = items.value.find(x => x.order === itemOrder)
    if(item){
        if(item.count > count){
            item.count = item.count - count
        } else if (item.count === count) {
            items.value = items.value.filter(item => item.order !== itemOrder);
        }
    }
    localStorage.setItem('items', JSON.stringify(items.value));
}
</script>

<template>
    <div class="inventary">
        <div class="inventary__field" v-for="i in 25" :key="i" @drop="onDragDrop($event, Number(i))" @dragover.prevent @dragenter.prevent>
            <FieldItem :field="item" v-for="item in items.filter(x => x.order === i)" :key="item.order" draggable="true" @dragstart="onDragStart($event, item)" @click="openAsideModal(item)"/>
        </div>
        <Transition>
            <AsideModal :item="selectedItem" v-if="selectedItem" @close="closeModal()" @removeItem="removeItem" />
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.inventary{
    &__field{
        position: relative;
        border: 1px solid #4D4D4D;
    }
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(50px, 100px);
    max-width: 525px;
    width: 100%;
    padding: 0;
    border-radius: 12px;
    border: 1px solid #4D4D4D;
    background: #262626;
    overflow: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%)
}
@media(max-width: 768px){
    .inventary{
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, 100px);
}
}
@media(max-width: 700px){
    .inventary{
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(50px, 100px);
}
}
@media(max-width: 530px){
    .inventary{
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(68px, 100px);
}
}
@media(max-width: 480px){
    .inventary{
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 83px;
}
}
@media(max-width: 420px){
    .inventary{
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 71px;
}
}
</style>






