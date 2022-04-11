<template>
    <div class="flex flex-col items-center justify-center lg:w-full mt-10">
        <div class="xl:max-w-[70%] w-full flex flex-col justify-center items-start">
              <h6
                class="lg:ml-[50px] relative md:ml-8 sm:ml-4 text-[#191919] font-semibold text-[16px] line-height-[19px]"
            >Favoriler</h6>

            <div
                class="flex flex-wrap relative justify-start items-center py-10 w-full p-4 lg:left-10 bg-white shadow-sm rounded-sm"
            >
                <div
                    v-for="(item, index) in favorites"
                    :key="index"
                    class="flex relative  p-4 shadow-[0_0_1px_0px_rgba(0,0,0,0.1)] flex-col justify-center items-center text-center lg:w-[12%] sm:w-4/12 md:4/12 h-60"
                >
                    <img width="120" height="120" :src="item.img" :alt="item.name" />
                    <div>{{ item.price }}</div>
                    <div>{{ item.name }}</div>
                    <div>{{ item.weight }}</div>
                    <div
                        class="absolute top-1 left-2/3 bg-white font-semibold rounded-xl w-10 h-10 flex items-center justify-center text-xl text-primaryColor shadow-xl cursor-pointer z-10"
                    >+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { favorites } from '../../../dummy'
</script>