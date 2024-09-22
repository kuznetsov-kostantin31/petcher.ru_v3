<script>
export default {
    data() {
        return {
            code: ''
        }
    },
    methods: {
        formatInput() {
            if (this.code.length > 6) {
                this.code = this.code.slice(0, 6);
            }
        }
    }
}
</script>

<template>
    <div class="flex justify-center">
        <p class="font_WMD">Введите полученный код</p>
    </div>
    <div class="flex flex-col items-center">
        <div class="flex space-x-1">
            <input v-model="code" type="text" maxlength="6"
                class="w-10 h-10 border rounded text-center focus:outline-none" @input="updateCode"
                placeholder="Введите код" />
                <div class="flex space-x-1">
                <span class="box-border w-8 h-9 rounded-lg border-2 border-solid border-[#067CFF] left-[82px] top-11">{{
                    code[0] }}</span>
                <span class="box-border w-8 h-9 rounded-lg border-2 border-solid border-[#067CFF] left-[82px] top-11">{{
                    code[1] }}</span>
                <span class="box-border w-8 h-9 rounded-lg border-2 border-solid border-[#067CFF] left-[82px] top-11">{{
                    code[2] }}</span>
                <span class="box-border w-8 h-9 rounded-lg border-2 border-solid border-[#067CFF] left-[82px] top-11">{{
                    code[3] }}</span>
                <span class="box-border w-8 h-9 rounded-lg border-2 border-solid border-[#067CFF] left-[82px] top-11">{{
                    code[4] }}</span>
                <span class="box-border w-8 h-9 rounded-lg border-2 border-solid border-[#067CFF] left-[82px] top-11">{{
                    code[5] }}</span>
            </div>
        </div>
    </div>

</template>

<style scoped>
input {
    position: absolute;
    opacity: 0;
    /* Скрыть инпут */
}

.font_WMD {
    font-family: 'Wix Madefor Display';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #067CFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: absolute;
    top: 80px
}

span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    /* Размер текста в квадрате */
}
</style>