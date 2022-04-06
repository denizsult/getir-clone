<template>
    <swiper
        class="w-full"
        :modules="modules"
        :options="swiperOptions"
        :autoplay="swiperOptions.autoplay"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :navigation="false"
        :pagination="false"
    >
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