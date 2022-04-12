 <template>
    <div class="flex w-full flex-col justify-center items-center rounded-lg shadow-lg flex flex-col p-6 bg-white">
        <h1 class="text-primary text-lg font-medium">Giriş yap veya kayıt ol</h1>
        <div class="flex justify-evenly m-2 w-full h-[60px]">
           
           
            <select v-model="phone_code" class="border-2 focus:border-primary w-1/6 h-14 rounded-md select-dropdown">
                <option v-for="(country, index) in countries" :key="index" class>
                    
                    {{ country.code }}
                </option>
            </select>

            <div class="w-5/6 ml-4 h-[80px] relative flex flex-col justify-between">
                <input v-model="phone" @focusout="check"
                    :class="'border-2 phone-input outline-[#5d3ebc] pt-[7px] pl-4 h-14 rounded-md ' + (!isValid ? ' border-red-400 outline-red-400' : '')"
                    maxlength="10" type="text" />
                <label class="absolute input-placeholder inline-block"
                    :class="phone.length > 0 ? 'input-placeholder-still' : 'input-placeholder'">
                    Telefon
                    Numarası
                </label>

                <small v-if="isValid === false" class="text-red-400 h-6 text-xs font-normal">
                    {{
                        errText
                    }}
                </small>
            </div>
        </div>

        <button @click="login"
            :class="'bg-brandYellow w-full text-primary rounded-md h-[50px] mt-2 hover:bg-primary hover:text-brandYellow font-semibold'">
            Telefon
            numarası ile devam et
        </button>
    </div>
</template>


 
 <script setup lang="ts">
import { ref, Ref } from 'vue'

let phone: Ref<string> = ref('');
let isValid: Ref<boolean> = ref(true);
let errText: Ref<string> = ref('');
let phone_code = '+90';


const emit = defineEmits(['login']);






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
        return false;
    }

    if (phone.value.length === 10 && phone.value.match(/^[0-9]+$/)) {
        isValid.value = true;
        phone.value = phone.value.slice(0, 3) + ' ' + phone.value.slice(3, 6) + ' ' + phone.value.slice(6, 10);
        return true;
    }

    errText.value = 'Lütfen geçerli bir telefon numarası giriniz.';
    isValid.value = false;
    return false;


}

const login = () => { if (isValid.value) emit('login', { phone: phone.value, phone_code: phone_code }) }

</script>








<style scoped> 
 .input-placeholder {
     top: 1rem;
     left: 20px;
     user-select: none;
     visibility: visible;
     pointer-events: none;
     color: #b3b3b3;
     transition: all 0.2s ease-in-out;
 }

 .phone-input:focus+.input-placeholder {
     top: 0.2rem;
     right: 10px;
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