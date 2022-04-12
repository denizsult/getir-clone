<template>
    <div class="flex flex-col items-center shadow-md justify-center w-full mt-4">
        <div class="xl:max-w-[70%] w-full   flex flex-col justify-center items-start">
            <h6
                class="lg:ml-[50px] relative md:ml-8 sm:ml-4 text-[#191919] font-semibold text-[16px] line-height-[19px]">
                Kategoriler</h6>

            <div class="flex h-full w-full flex-wrap flex-row lg:justify-start relative lg:left-8 justify-around items-center ">
                
    
                <div v-for="category in categories" :key="category.name"
                    class="flex flex-col select-none items-center m-4 justify-center text-greyDark h-24 w-20 hover:bg-primarySmoothBg hover:text-primarySmooth">
                    <img width="48" height="48" class="rounded-md mb-4 border border-gray-200 drop-shadow-sm"
                        :src="category.img" :alt="category.name" />
                    <span class="tracking-tightest text-base leading-4 font-semibold text-center">
                        {{
                            category.name
                        }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { categories } from '../../../../src/dummy';

</script>

<style>
</style>