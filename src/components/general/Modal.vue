<template>
    <div class="w-screen h-screen absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center  z-40">
        <div
            class="lg:w-[420px] lg:h-[380px] sm:w-full sm:h-full border rounded-lg shadow-sm  flex flex-col lg:justify-between sm:justify-between items-center bg-white">
            <div class="flex flex-col items-center h-72 justify-around w-full">
                <div class="flex w-full justify-between items-center px-2 pt-4 ">
                    <svg @click="closeModal" data-testid="icon" name="chevron-left" size="10" color="currentColor"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" style="width: 10px;" viewBox="0 0 32 32"
                        class="style__Icon-sc-__sc-hqksj3-1 doIGoy cursor-pointer">
                        <path style="fill: #5d3ebc;"
                            d="M24.472 0.669c-0.892-0.892-2.332-0.892-3.224 0l-13.719 13.719c-0.892 0.892-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0s0.892-2.332 0-3.224l-12.096-12.096 12.096-12.096c0.892-0.892 0.892-2.355 0-3.247z"
                            class="style__Path-sc-__sc-hqksj3-2 kqvXtw" />
                    </svg>

                    <h5 class="text-primary font-semibold text-center">Tek kullanımlık şifre</h5>

                    <div @click="closeModal"
                        class="flex items-center justify-center bg-gray-100 w-6 h-6 cursor-pointer rounded-md">
                        <svg data-testid="icon" name="close" size="10" color="black" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                            class="style__Icon-sc-__sc-hqksj3-1 doIGoy w-2  ">
                            <path
                                d="M31.331 0.669c-0.892-0.892-2.334-0.892-3.226 0l-12.104 12.104-12.104-12.104c-0.892-0.892-2.334-0.892-3.226 0s-0.892 2.334 0 3.226l12.104 12.104-12.104 12.104c-0.892 0.892-0.892 2.334 0 3.227s2.334 0.892 3.226 0l12.104-12.105 12.104 12.105c0.892 0.892 2.334 0.892 3.226 0s0.892-2.334 0-3.227l-12.104-12.104 12.104-12.104c0.892-0.869 0.892-2.334 0-3.226z"
                                class="style__Path-sc-__sc-hqksj3-2 kqvXtw" />
                        </svg>
                    </div>

                </div>

                <div class="flex flex-col justify-evenly h-full w-full  text-[13px]  text-center text-gray-500">
                    <div class="text-[16px] font-thinner word-break ">
                        Lütfen {{phone}} numaralı
                        telefonuna
                        gönderilen tek <br> kullanımlık şifreyi gir

                    </div>

                    <div class="w-full px-8">
                        <input type="text"
                            class="rounded-md border focus:outline-primary hover:border-primary w-full h-12" />
                    </div>
                    <div class="w-full px-8">
                        <button
                            class="w-full bg-primarySmooth h-10 rounded-lg text-white text-[13px] hover:bg-[#7849f7]">Onayla
                            ve giriş yap</button>
                    </div>

                </div>
            </div>


            <div class="text-[13px] w-full bg-gray-200 h-12 flex justify-center items-center">
                Şifre gelmedi mi? &nbsp;
                <span class="text-primary font-semibold cursor-pointer">Tek kullanımlık şifreyi tekrar gönder</span>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import {ref} from 'vue'

const emit = defineEmits(['close'])

const props = defineProps({
    phone: {
        type: String,
        default: ''
    }
})


const phone = ref(props.phone)



const closeModal = () => {
    emit('close')
}


</script>