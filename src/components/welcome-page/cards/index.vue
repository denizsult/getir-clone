<template>
    <div class="flex flex-col items-center  justify-center w-full  m-16">
        <div class="xl:max-w-[71%] w-full h-auto  flex flex-col lg:flex-row    justify-around  items-start ">
            <div class="flex flex-col w-full shadow-sm justify-center items-center text-center bg-white h-96 relative  lg:left-10 rounded-xl m-2 "
                v-for="(card, index) in cards" :key="index">
                <img :src="card.img" :alt="card.title" />
                <h1 class="text-primary text-[20px] font-semibold">{{ card.title }}</h1>
                <p>{{ card.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { cards } from '../../../dummy';

</script>