<template>
    <div class="w-full flex h-12 text-[26px] font-semibold bg-primary text-brandYellow justify-center items-center">
        Getir
    </div>
    <div class="w-full flex justify-between items-center px-2 h-10 cursor-pointer ">
        <div class="flex items-center ">
            <svg data-testid="icon" fill="#5d3ebc" name="map-pin-filled" version="1.1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                class="style__Icon-sc-__sc-hqksj3-1 icUOBu w-5 h-5">
                <path
                    d="M13.328 0.039c-3.465 0-6.931 1.333-9.463 3.865-2.399 2.532-3.865 5.864-3.865 9.463 0 5.198 3.332 9.863 6.264 13.062 1.599 1.599 3.065 2.932 4.265 3.865 0.666 0.4 1.066 0.8 1.466 1.066 0.133 0.133 0.267 0.267 0.4 0.267 0.133 0.133 0.133 0.133 0.133 0.133 0.4 0.267 1.066 0.267 1.466 0l0.133-0.133c0.133 0 0.267-0.133 0.4-0.267 0.4-0.267 0.933-0.666 1.466-1.066 1.2-0.933 2.799-2.266 4.265-3.865 3.066-3.199 6.398-7.864 6.398-13.062 0-3.599-1.333-6.931-3.865-9.463s-5.998-3.865-9.463-3.865zM7.997 13.368c0-2.932 2.399-5.331 5.331-5.331s5.331 2.399 5.331 5.331c0 2.932-2.399 5.331-5.331 5.331s-5.331-2.399-5.331-5.331z"
                    class="style__Path-sc-__sc-hqksj3-2 kqvXtw "></path>
            </svg>
            Teslimat Adresini Belirle
        </div>

        <div>
            <svg data-testid="icon" fill="#5d3ebc" name="chevron-right" size="12" color="#5D38C0" version="1.1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                class="style__Icon-sc-__sc-hqksj3-1 fbVMua w-4 h-4s">
                <path
                    d="M7.528 31.331c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224l-13.719-13.719c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l12.096 12.096-12.096 12.096c-0.892 0.892-0.892 2.355 0 3.247z"
                    class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path>
            </svg>
        </div>
    </div>
    <swiper class="w-full" :modules="modules" :options="swiperOptions" :autoplay="swiperOptions.autoplay"
        :slides-per-view="1" :space-between="0" :loop="true" :navigation="false" :pagination="false">
        <swiper-slide v-for="card in mobileSliderImages" :key="card">
            <img class="w-full cursor-pointer" :src="card" alt="card" />
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import { mobileSliderImages } from "../../../dummy"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { A11y, Autoplay, EffectFade } from 'swiper';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
const modules = [A11y, Autoplay, EffectFade];

const swiperOptions = {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

</script>