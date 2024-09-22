<script>
import final_text_recover_reg from '../register_text_under_header/final_text_recover_reg.vue';
import btn_next_work from '@/shared/ui/buttons/button_next_work.vue'

export default{
    components:{
        final_text_recover_reg,
        btn_next_work
    }
}
</script>

<template>
        <div class="w-1/2 flex justify-start flex-col
    absolute left-1/4 top-1/4">
      <final_text_recover_reg></final_text_recover_reg>
    </div>
       
    <div class="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div class="h-full w-full flex flex-col relative left-1/3">
    <div class="h-28 w-9"></div>
    <div class="">
  <div>
    <a href="/"><btn_next_work></btn_next_work></a>
   </div>
    </div>     
    </div>

    </div>
</template>