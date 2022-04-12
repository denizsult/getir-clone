<template>

    <section id="Modal">
        <Modal class="bg-neutral-800/50" :phone="phone" @close="modalShow" v-if="isModalShow" />
    </section>

    <div :class="isModalShow ? 'fixed w-full' : ''">

        <section id="TopBar">
            <Topbar />
        </section>

        <section id="Slider" class="hidden lg:block md:block">
            <Slider @login="modalShow(), setPhone($event)" />
        </section>

        <section id="Mobile-Slider" class="block lg:hidden md:hidden">
            <MobileSlider />
        </section>

        <section id="wrapper"
            class="w-max-[1139px] sm:w-full m-auto flex flex-col justify-center items-center bg-bgColor">
            <Categories />
            <Campaigns class="hidden lg:flex md:flex" />
            <Favorites />
            <Appstores />
            <Cards />

        </section>

        <section id="Footer">
            <Footer />
        </section>
    </div>
</template>

<script setup lang="ts">
import Topbar from '../components/general/Topbar.vue'
import Slider from '../components/welcome-page/slider/index.vue'
import MobileSlider from '../components/welcome-page/mobile-slider/index.vue'
import Categories from '../components/welcome-page/categories/index.vue'
import Campaigns from '../components/welcome-page/campaigns/index.vue'
import Favorites from '../components/welcome-page/favorites/index.vue'
import Appstores from '../components/welcome-page/appstores/index.vue'
import Cards from '../components/welcome-page/cards/index.vue'
import Footer from '../components/general/Footer.vue'
import Modal from '../components/general/Modal.vue'

////////////////////////////////////////////////////////////

import { ref, Ref } from 'vue'


interface phone {
    phone: string;
}



let isModalShow: Ref<boolean> = ref(false);
let phone: Ref<string> = ref('');



const setPhone = (data: phone) => {
    phone.value = data.phone;
   
}

const modalShow = () => {
    isModalShow.value = !isModalShow.value;
}




</script>