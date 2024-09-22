<script>
import btn_back from '@/shared/ui/buttons/button_back.vue'
import btn_next from '@/shared/ui/buttons/button_next.vue'
import imput_password from '@/shared/ui/inputs/imput_password.vue';
import imput_email from '@/shared/ui/inputs/input_email.vue'
import under_header_text from '@/widgets/register_text_under_header/2.4.vue'


export default{
    components:{
    btn_back,
    btn_next,
    imput_password,
    imput_email,
    under_header_text

    }
}
</script>

<template>
    
    <div className="w-1/2 flex justify-end
    absolute left-1/4 top-1/4">
    <under_header_text></under_header_text>
    </div>
       
    <div className="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div className="h-full w-full flex flex-col relative left-1/3">
    <div className="h-28 w-9"></div>
    <div className="">
    <div className="">
      <imput_email></imput_email>
    </div>
    <div className="mt-5">
    <imput_password></imput_password>
    </div> 
    <a href="/register2"><btn_next></btn_next></a>
    <a href="/register"><btn_back></btn_back></a>
    </div>     
    </div>
    

    </div>
</template>