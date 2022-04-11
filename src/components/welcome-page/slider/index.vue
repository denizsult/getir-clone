<template>
    <swiper
        class="w-full h-[500px] relative"
        :modules="modules"
        :options="swiperOptions"
        :slides-per-view="1"
        :space-between="0"
        :autoplay="swiperOptions.autoplay"
        :navigation="false"
        :pagination="false"
        effect="coverflow"
    >
        <div class="gradiant"></div>
        <swiper-slide v-for="slider in sliderImages" :key="slider">
            <img class="w-full h-full object-cover" :src="slider" alt="card" />
        </swiper-slide>


 
       
        <div class="absolute z-10 w-full flex justify-center items-center h-auto top-[100px]">
            <div class="w-1/2 z-10 flex justify-center items-center">
                <div class="flex flex-col justify-start items-start">
                    <img
                        src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                    />

                    <div class="text-white font-semibold text-4xl mt-12">
                        Dakikalar içinde
                        <br />kapınızda
                    </div>
                </div>
            </div>

            <div class="w-1/2  flex items-center justify-center">
                <div
                    class="flex w-[400px]  flex-col justify-center items-center rounded-lg shadow-lg flex flex-col p-6 bg-white"
                >
                    <h1 class="text-primary text-lg font-medium">Giriş yap veya kayıt ol</h1>

                    <div class="flex justify-evenly m-2 h-[60px]">
                        <select
                            v-model="phone_code"
                            class="border-2 focus:border-primary w-2/6 h-14 rounded-md select-dropdown"
                        >
                            <option v-for="(country, index) in countries" :key="index" class>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="flag-icons-tr"
                                    viewBox="0 0 512 512"
                                    style="width: 20px;"
                                >
                                    <g fill-rule="evenodd">
                                        <path fill="#e30a17" d="M0 0h512v512H0z" />
                                        <path
                                            fill="#fff"
                                            d="M348.8 264c0 70.6-58.3 127.9-130.1 127.9s-130.1-57.3-130.1-128 58.2-127.8 130-127.8S348.9 193.3 348.9 264z"
                                        />
                                        <path
                                            fill="#e30a17"
                                            d="M355.3 264c0 56.5-46.6 102.3-104.1 102.3s-104-45.8-104-102.3 46.5-102.3 104-102.3 104 45.8 104 102.3z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="m374.1 204.2-1 47.3-44.2 12 43.5 15.5-1 43.3 28.3-33.8 42.9 14.8-24.8-36.3 30.2-36.1-46.4 12.8-27.5-39.5z"
                                        />
                                    </g>
                                </svg>
                                {{ country.code }}
                            </option>
                        </select>

                        <div class="w-80 ml-4 h-[80px] relative flex flex-col justify-between">
                            <input
                                v-model="phone"
                                @focusout="check"
                                :class="'border-2 phone-input pt-[7px] h-14 rounded-md ' + (!isValid ? ' border-red-400 outline-red-400' : '')"
                                maxlength="10"
                                type="text"
                            />
                            <label
                                class="absolute input-placeholder inline-block"
                                :class="phone.length > 0 ? 'input-placeholder-still' : 'input-placeholder'"
                            >
                                Telefon
                                Numarası
                            </label>

                            <small
                                v-if="isValid === false"
                                class="text-red-400 h-6 text-xs font-normal"
                            >
                                {{
                                    errText
                                }}
                            </small>
                        </div>
                    </div>

                    <button
                        :class="'bg-brandYellow w-full text-primary rounded-md h-[40px] mt-2 hover:bg-primary hover:text-brandYellow font-semibold'"
                    >
                        Telefon
                        numarası ile devam et
                    </button>
                </div>
            </div>
        </div>
    </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import { watch, ref, Ref } from 'vue'
import { sliderImages } from '../../../dummy'

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade];

const swiperOptions = {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

}


let phone: Ref<string> = ref('');
let isValid: Ref<boolean> = ref(true);
let errText: Ref<string> = ref('');
let phone_code = '+90';



let countries = [
    {
        code: '+90',
        name: 'tr'
    },
    {
        code: '+49',
        name: 'de'
    },
    {
        code: '+44',
        name: 'uk'

    },
    {
        code: '+1',
        name: 'us'
    }
]

const check = () => {
    if (phone.value.length === 0) {
        errText.value = 'Lütfen telefon numaranızı giriniz.';
        isValid.value = false;
    }
    else if (phone.value.length === 10 && phone.value.match(/^[0-9]+$/)) {
        isValid.value = true;
        phone.value = phone.value.slice(0, 3) + ' ' + phone.value.slice(3, 6) + ' ' + phone.value.slice(6, 10);

    } else {
        errText.value = 'Lütfen geçerli bir telefon numarası giriniz.';
        isValid.value = false;
    }
}



const login = () => {
    isValid.value === true;
    defineEmits(['login'])
}

</script>
<style scoped>
.gradiant {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(90deg, #5d3ebc 0%, rgba(93, 62, 188, 0) 100%);
}

.phone-input::placeholder {
    padding-left: 10px;
    color: #b3b3b3;
}

.phone-input {
    padding-left: 10px;
}

.input-placeholder {
    top: 1rem;
    right: 100px;
    user-select: none;
    visibility: visible;
    pointer-events: none;
    color: #b3b3b3;
    transition: all 0.2s ease-in-out;
}
.phone-input:focus + .input-placeholder {
    top: 0.2rem;
    right: 130px;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
    font-size: 12px;
    color: #5d3ebc;
}

.input-placeholder-still {
    top: 0.2rem !important;
    right: 130px !important;
    margin-bottom: 10px !important;
    font-size: 12px;
    color: #5d3ebc;
}

/* inside select padding */
.select-dropdown {
    padding-left: 10px;
}
</style>    