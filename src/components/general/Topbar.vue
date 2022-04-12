<template>
    <div class="w-full static h-12 bg-topBar flex xl:px-60 p-0 overflow-hidden">
        <div class="lg:w-1/2 w-full flex justify-center items-center">
            <div
                class="flex lg:justify-center justify-start w-full h-full section-1 color-brandYellow lg:text-[16px] md:text-[16px] text-[13px]"
            >
                <div class="active p-4">
                    <a class="text-brandYellow" href="#">getir</a>
                </div>

                <div class="p-4">
                    <a href="#">getiryemek</a>
                </div>
                <div class="p-4">
                    <a href="#">getirbüyük</a>
                </div>
                <div class="p-4">
                    <a href="#">getirsu</a>
                </div>
                <div class="p-4">
                    <a href="#">getirçarşı</a>
                </div>
            </div>
        </div>

        <div
            class="lg:w-1/2  w-2/4 md:flex hidden flex lg:justify-center justify-evenly items-center color-white top-right"
        >
            <div class="flex justify-center items-center">
                <!-- svg from assets file -->
                <svg
                    data-testid="icon"
                    style="width: 14px;"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    class="style__Icon-sc-__sc-hqksj3-1 iBgDjm"
                >
                    <path
                        d="M16 0C7.127 0 0 7.127 0 16s7.127 16 16 16c8.873 0 16-7.127 16-16S24.873 0 16 0zm12.945 14.545h-5.818c-.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zm-8.727 0h-8.436c.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zm-7.563-11.2a23.387 23.387 0 0 0-3.782 11.2H3.055c.582-5.382 4.509-9.891 9.6-11.2zm-9.6 14.11h5.818c.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-.436 3.927-1.891 7.709-4.364 10.764zm3.345.437c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-.727 5.382-4.655 9.891-9.745 11.2z"
                        class="style__Path-sc-__sc-hqksj3-2 kqvXtw svg"
                    />
                </svg>

                <a class="lg:block hidden" href="#">Türkçe (TR)</a>
            </div>
            <div class="flex justify-center items-center ml-2">
                <svg
                    data-testid="icon"
                    style="width: 14px;"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    class="style__Icon-sc-__sc-hqksj3-1 iBgDjm"
                >
                    <path
                        d="M24 8.846c0 4.39-3.582 7.948-8 7.948s-8-3.559-8-7.948c0-4.39 3.582-7.948 8-7.948s8 3.558 8 7.948zM.027 28.896c-.207 1.16.83 2.206 2.116 2.206h27.713c1.327 0 2.324-1.048 2.116-2.206-1.204-6.696-7.884-10.511-15.974-10.511S1.228 22.2.026 28.896z"
                        class="style__Path-sc-__sc-hqksj3-2 kqvXtw svg"
                    />
                </svg>
                <a class="lg:block hidden" href="#">Giriş Yap</a>
            </div>
            <div class="flex justify-center items-center ml-2">
                <svg
                    data-testid="icon"
                    style="width: 14px;"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    class="style__Icon-sc-__sc-hqksj3-1 iBgDjm"
                >
                    <path
                        d="M12 14a5.998 5.998 0 0 0 5.885-7.171 5.996 5.996 0 0 0-4.714-4.714 6.007 6.007 0 0 0-6.16 2.551 6.003 6.003 0 0 0 .746 7.576A5.996 5.996 0 0 0 12 13.999zm0 4a12.003 12.003 0 0 1 12 12H0a12.003 12.003 0 0 1 12-12zm16-8a2 2 0 0 0-4 0v2h-2a2 2 0 0 0 0 4h2v2a2 2 0 0 0 4 0v-2h2a2 2 0 0 0 0-4h-2v-2z"
                        class="style__Path-sc-__sc-hqksj3-2 kqvXtw svg"
                    />
                </svg>
                <a class="xl:block lg:block hidden" href="#">Kayıt Ol</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">




</script>

 <style>
.section-1 > div {
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: 2px;
    margin-right: 2px;

    width: auto;

    font-weight: 500;
    color: rgb(219, 219, 255);
}

.active {
    background-color: #5d3ebc;
    border-top-right-radius: 10px;
    border-top-left-radius: 12px;
}

.svg {
    fill: white;
}

.section-1 > div:hover {
    cursor: pointer;
    background-color: #5d3ebc;
    border-top-right-radius: 10px;
    border-top-left-radius: 12px;
}

.top-right > div > a {
    color: rgb(219, 219, 255);
    font-size: 13px;
    padding: 10px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, "sans-serif";
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.32px;
}
</style>