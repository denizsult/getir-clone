<template>
    <div class="flex flex-col items-center absolutes justify-center w-full mt-2">
        <div class="xl:max-w-[70%] w-full h-72 relative lg:left-10 flex  justify-center items-start">
            <div
                class="flex relative m-1 bg-primary justify-center items-center w-full h-full bg-primary bg-card rounded-xl overflow-hidden"
            >
                <div class="top-4 flex justify- items-center w-full h-full">
                    <div class="flex flex-col pl-10 text-white text-[25px]">
                        <h1 class="font-bold">Getir'i indirin!</h1>
                        <p>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                        <div class="w-3/4 flex mt-4 h-full">
                            <button class="w-1/3 mr-1" v-for="store in stores" :key="store">
                                <img :src="store" alt="btn-img" />
                            </button>
                        </div>
                    </div>

                    <div class="lg:block hidden relative static top-[62px]">
                        <img
                            src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
                            class="w-[1300px] h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { stores } from '../../../dummy';

</script>
 