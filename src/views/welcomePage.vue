<template>
    <section id="TopBar">
        <Topbar />
    </section>

    <section id="Slider" class="hidden lg:block md:block">
        <Slider />
    </section>

    <section id="Mobile-Slider" class="block lg:hidden md:hidden">
        <MobileSlider />
    </section>

    <section
        id=" wrapper"
        class="lg:w-[65%] md:w-[65%]  sm:w-full m-auto flex flex-col justify-center items-center"
    >
        <Categories />
    
    </section>
</template>

<script setup lang="ts">
import Topbar from '../components/general/Topbar.vue'
import Slider from '../components/welcome-page/slider/index.vue'
import MobileSlider from '../components/welcome-page/mobile-slider/index.vue'
import Categories from '../components/welcome-page/categories/index.vue'


</script>