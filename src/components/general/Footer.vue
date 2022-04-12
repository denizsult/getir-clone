<template>
    <div class="w-full h-full bg-white  flex justify-center items-center">
        <div class="flex flex-col lg:w-[70%] w-full h-full">


            <div
                class="h-full w-full flex lg:flex-row sm:flex-col justify-between relative lg:left-8 items-start pb-2  sm:pl-4">

                <div class="flex flex-col lg:w-1/5 sm:w-full h-full mt-10">
                    <div class="text-[20px] text-primary">Getir'i indirin!</div>
                    <img v-for="appImg in stores" :key="appImg" :src="appImg" class="mt-4 w-[160px] cursor-pointer"
                        alt="app-img" />
                </div>



                <div class="flex flex-col text-[15px] text-greyDark lg:w-1/5 sm:w-full h-full mt-10">

                    <div @click="card = 'explore-collapse-footer', cardButton = 'explore-collapse-icon', showCollapse()"
                        class="text-primary text-[20px] flex justify-between cursor-pointer items-start">
                        Getir'i Keşfedin
                        <div
                            class="mr-3 rounded-xl flex items-center justify-center text-center  bg-primarySmoothBg w-8 h-8 lg:hidden  ">

                            <svg id="explore-collapse-icon" data-testid="icon" name="chevron-down" size="10"
                                color="#5d3ebc" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32 "
                                class="style__Icon-sc-__sc-hqksj3-1 doIGoy  w-1/3 h-1/3 rotate-180  transition-all">
                                <path
                                    d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"
                                    class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path>
                            </svg>

                        </div>

                    </div>

                    <div id="explore-collapse-footer" class="lg:hidden block transition-all 	 ">
                        <div class="mt-4">
                            <a href="#">Hakkımızda</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Kariyer</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Teknoloji Kariyerleri</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">İletişim</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">COVID-19 Duyuru</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Sosyal Sorumluluk Projeleri</a>
                        </div>
                    </div>




                    <div class="lg:block hidden 	 ">
                        <div class="mt-4">
                            <a href="#">Hakkımızda</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Kariyer</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Teknoloji Kariyerleri</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">İletişim</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">COVID-19 Duyuru</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Sosyal Sorumluluk Projeleri</a>
                        </div>
                    </div>
                </div>

                <div @click="card = 'help-collapse-footer', cardButton = 'help-collapse-icon', showCollapse()"
                    class="flex flex-col  text-[15px] text-greyDark lg:w-1/5 sm:w-full h-full mt-10">
                    <div class="text-primary text-[20px] flex justify-between cursor-pointer items-start">Yardıma mı
                        ihtiyacınız var?
                        <div
                            class="mr-3 rounded-xl flex items-center justify-center text-center  bg-primarySmoothBg w-8 h-8 lg:hidden  ">

                            <svg id="help-collapse-icon" data-testid="icon" name="chevron-down" size="10"
                                color="#5d3ebc" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32 "
                                class="style__Icon-sc-__sc-hqksj3-1 doIGoy  w-1/3 h-1/3  transition-all">
                                <path
                                    d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"
                                    class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path>
                            </svg>

                        </div>
                    </div>

                    <div id="help-collapse-footer" class="hidden  transition-all">

                        <div class="mt-4">
                            <a href="#">Sıkça Sorulan Sorular</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Kişisel Verilerin Korunması</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Gizlilik Politikası</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Kullanım Koşulları</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Çerez Politikası</a>
                        </div>
                    </div>

                    <div class="lg:block hidden  transition-all">

                        <div class="mt-4">
                            <a href="#">Sıkça Sorulan Sorular</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Kişisel Verilerin Korunması</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Gizlilik Politikası</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Kullanım Koşulları</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Çerez Politikası</a>
                        </div>
                    </div>
                </div>


                <div @click="card = 'partner-collapse-footer', cardButton = 'partner-collapse-icon', showCollapse()"
                    class="flex flex-col text-[15px] text-greyDark  lg:w-1/5 sm:w-full h-full mt-10">
                    <div class="text-primary text-[20px] flex justify-between cursor-pointer items-start">İş Ortağımız
                        Olun
                        <div
                            class="mr-3 rounded-xl flex items-center justify-center text-center  bg-primarySmoothBg w-8 h-8 lg:hidden  ">

                            <svg id="partner-collapse-icon" data-testid="icon" name="chevron-down" size="10"
                                color="#5d3ebc" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32 "
                                class="style__Icon-sc-__sc-hqksj3-1 doIGoy  w-1/3 h-1/3  transition-all">
                                <path
                                    d="M28.084 7.516l-12.096 12.119-12.096-12.096c-0.892-0.892-2.332-0.892-3.224 0s-0.892 2.332 0 3.224l13.719 13.719c0.892 0.892 2.332 0.892 3.224 0l13.719-13.719c0.892-0.892 0.892-2.332 0-3.224-0.892-0.915-2.355-0.915-3.247-0.023z"
                                    class="style__Path-sc-__sc-hqksj3-2 kqvXtw"></path>
                            </svg>

                        </div>
                    </div>

                    <div id="partner-collapse-footer" class=" hidden  transition-all">

                        <div class="text-[16px] text-greyDark mt-4">
                            <a href="#">Bayimiz Olun</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Deponuzu Kiralayın</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">GetirYemek Restoranı Olun</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">GetirÇarşı İşletmesi Olun</a>
                        </div>
                    </div>
                    <div class=" lg:block hidden transition-all">

                        <div class="text-[16px] text-greyDark mt-4">
                            <a href="#">Bayimiz Olun</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">Deponuzu Kiralayın</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">GetirYemek Restoranı Olun</a>
                        </div>
                        <div class="mt-4">
                            <a href="#">GetirÇarşı İşletmesi Olun</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="w-full" />

            <div class="flex lg:flex-row sm:flex-col justify-between items-center h-full w-full">
                <div class="m-4 text-[12px]">
                    © 2022 Getir
                    <span class="text-primary cursor-pointer">
                        *
                        Bilgi Toplumu Hizmetleri
                    </span>
                </div>
                <div class="flex m-4 right-section">
                    <div class="social-svg">

                        <svg data-testid="icon"  style="width: 20px;" name="facebook" size="20" color="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 jqennC"><path d="M32 16.097c0-8.838-7.163-16-16-16s-16 7.162-16 16c0 7.987 5.85 14.606 13.5 15.806v-11.181h-4.063v-4.625h4.063v-3.525c0-4.009 2.387-6.225 6.044-6.225 1.75 0 3.581 0.313 3.581 0.313v3.938h-2.019c-1.987 0-2.606 1.234-2.606 2.5v3h4.437l-0.709 4.625h-3.728v11.181c7.65-1.2 13.5-7.819 13.5-15.806z" class="style__Path-sc-__sc-hqksj3-2 kqvXtw social-icon"></path></svg>
                         
                    </div>
                    <div class="social-svg">
                        <svg data-testid="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                            style="width: 20px;" class="style__Icon-sc-__sc-hqksj3-1 jqennC">
                            <path
                                d="M32.062 5.334a12.976 12.976 0 0 1-3.848 1.111 7.047 7.047 0 0 0 2.947-3.906 13.45 13.45 0 0 1-4.254 1.699A6.508 6.508 0 0 0 22.016 2c-3.698 0-6.697 3.164-6.697 7.058 0 .56.061 1.097.173 1.615-5.565-.28-10.5-3.099-13.804-7.359-.581 1.034-.905 2.24-.905 3.551 0 2.452 1.183 4.611 2.977 5.88a6.422 6.422 0 0 1-3.033-.882v.084c0 3.423 2.305 6.281 5.371 6.93a6.479 6.479 0 0 1-3.01.121c.859 2.805 3.327 4.846 6.265 4.905a12.984 12.984 0 0 1-9.896 2.926A18.333 18.333 0 0 0 9.74 30c12.325 0 19.059-10.759 19.059-20.076 0-.303 0-.604-.023-.905a13.963 13.963 0 0 0 3.348-3.656l-.063-.028z"
                                class="style__Path-sc-__sc-hqksj3-2 kqvXtw social-icon" />
                        </svg>
                    </div>
                    <div class="social-svg">
                        <svg data-testid="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                            style="width: 20px;" class="style__Icon-sc-__sc-hqksj3-1 jqennC">
                            <path
                                d="M16 2.883c4.272 0 4.778.016 6.465.093 1.56.071 2.407.332 2.971.551.747.29 1.28.637 1.84 1.197s.907 1.093 1.197 1.84c.219.564.48 1.411.551 2.971.077 1.687.093 2.193.093 6.465s-.016 4.778-.093 6.465c-.071 1.56-.332 2.407-.551 2.971-.29.747-.637 1.28-1.197 1.84s-1.093.907-1.84 1.197c-.564.219-1.411.48-2.971.551-1.687.077-2.193.093-6.465.093s-4.778-.016-6.465-.093c-1.56-.071-2.407-.332-2.971-.551-.747-.29-1.28-.637-1.84-1.197s-.907-1.093-1.197-1.84c-.219-.564-.48-1.411-.551-2.971-.077-1.687-.093-2.193-.093-6.465s.016-4.778.093-6.465c.071-1.56.332-2.407.551-2.971.29-.747.637-1.28 1.197-1.84s1.093-.907 1.84-1.197c.564-.219 1.411-.48 2.971-.551 1.687-.077 2.193-.093 6.465-.093zM16 0c-4.345 0-4.89.018-6.597.096C7.7.174 6.537.444 5.519.84c-1.052.409-1.944.956-2.834 1.845S1.248 4.467.84 5.519C.444 6.537.174 7.7.096 9.403.018 11.11 0 11.654 0 16s.018 4.89.096 6.597c.078 1.703.348 2.866.744 3.884.409 1.052.956 1.944 1.845 2.834s1.782 1.437 2.834 1.845c1.018.396 2.181.666 3.884.744C11.11 31.982 11.654 32 16 32s4.89-.018 6.597-.096c1.703-.078 2.866-.348 3.884-.744 1.052-.409 1.944-.956 2.834-1.845s1.436-1.782 1.845-2.834c.396-1.018.666-2.181.744-3.884C31.982 20.89 32 20.346 32 16s-.018-4.89-.096-6.597c-.078-1.703-.348-2.866-.744-3.884-.409-1.052-.956-1.944-1.845-2.834S27.533 1.248 26.481.84C25.463.444 24.3.174 22.597.096 20.891.018 20.346 0 16 0zm0 7.784a8.216 8.216 0 1 0 0 16.432 8.216 8.216 0 0 0 0-16.432zm0 13.549a5.333 5.333 0 1 1 0-10.666 5.333 5.333 0 0 1 0 10.666zM26.461 7.459a1.92 1.92 0 1 1-3.841-.001 1.92 1.92 0 0 1 3.841.001z"
                                class="style__Path-sc-__sc-hqksj3-2 kqvXtw social-icon" />
                        </svg>
                    </div>
                    <div
                        class="flex justify-center items-center w-[120px] cursor-pointer rounded-lg border border-gray-200 ml-2 px">
                        <svg data-testid="icon" style="width: 14px;" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 iBgDjm">
                            <path
                                d="M16 0C7.127 0 0 7.127 0 16s7.127 16 16 16c8.873 0 16-7.127 16-16S24.873 0 16 0zm12.945 14.545h-5.818c-.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zm-8.727 0h-8.436c.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zm-7.563-11.2a23.387 23.387 0 0 0-3.782 11.2H3.055c.582-5.382 4.509-9.891 9.6-11.2zm-9.6 14.11h5.818c.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-.436 3.927-1.891 7.709-4.364 10.764zm3.345.437c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-.727 5.382-4.655 9.891-9.745 11.2z"
                                class="style__Path-sc-__sc-hqksj3-2 kqvXtw svg-footer" />
                        </svg>

                        <p class="ml-2 text-[14px]">Türkçe (TR)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { stores } from '../../dummy';

const card = ref();
const cardButton = ref();

const showCollapse = () => {
    let el: HTMLElement = document.querySelector(`#${card.value}`)!;
    let button: HTMLElement = document.querySelector(`#${cardButton.value}`)!;
    let elementDisplay = window.getComputedStyle(el).display;
    
 
    if (elementDisplay === 'none') {
        el.style.display = 'block'; button.style.transform = 'rotate(180deg)';
        return;
    };

    button.style.transform = 'rotate(0deg)';
    el.style.display = 'none';
}


</script>

<style>
.social-icon {
    fill: grey;
}

.social-svg {
    margin-left: 15px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    cursor: pointer;
    border-radius: 10px;
}

.right-section>div:hover {
    background: rgb(93, 62, 188, 0.1);
}

.svg-footer {
    fill: grey;
}

.right-section>div:hover>svg>path {
    fill: rgb(93, 62, 188, 0.8);
}
</style>