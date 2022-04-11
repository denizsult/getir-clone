<template>
    <div class="flex flex-col items-center justify-center lg:w-full mt-10">
        <div class="xl:max-w-[1350px] w-full flex flex-col justify-center items-start ">
            <h6
                class="lg:ml-[50px] relative md:ml-8 sm:ml-4 text-[#191919] font-semibold text-[16px] line-height-[19px]"
            >Kategoriler</h6>

            <div class="flex justify-center relative lg:left-10 items-center xl:w-full w-screen overflow-hidden ">
                <div
                    class="flex lg:w-1/3 sm:w-full justify-evenly shadow-sm items-center text-center bg-white h-full m-2"
                    v-for="(card, index) in mobileSliderImages"
                    :key="index"
                >
                    <img class=" rounded-xl " :src="card" :alt="card" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { mobileSliderImages } from '../../../dummy';
</script>

 