<script>
import btn_next from '@/shared/ui/buttons/button_next.vue'
import imput_password from '@/shared/ui/inputs/imput_password.vue';
import recover_password from '../register_text_under_header/recover_password.vue';


export default{
    components:{
    btn_next,
    imput_password,
    recover_password

    }
}
</script>

<template>
    <div className="w-1/2 flex justify-start
    absolute left-1/4 top-1/4">
    <recover_password></recover_password>
    </div>
    <div className="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div className="h-full w-full flex flex-col relative left-1/3">
    <div className="h-28 w-9"></div>
    <div className="">
    <div className="">
    </div>
    <div className="mt-5">
    <imput_password></imput_password>
    </div> 
    <a href="/register8"><btn_next></btn_next></a>

    </div>     
    </div>
    

    </div>
</template>