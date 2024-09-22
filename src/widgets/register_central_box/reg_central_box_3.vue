<script>
import btn_add_project from '@/shared/ui/buttons/button_add_project.vue';
import final_text_reg from '@/widgets/register_text_under_header/final_text_reg.vue';
import btn_go_over from '@/shared/ui/buttons/button_go_over.vue'

export default{
    components:{
        btn_add_project,
        final_text_reg,
        btn_go_over
    }
}
</script>

<template>
        <div class="w-1/2 flex justify-start flex-col
    absolute left-1/4 top-1/4">
      <final_text_reg></final_text_reg>
    </div>
       
    <div class="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div class="h-full w-full flex flex-col relative left-1/3">
    <div class="h-28 w-9"></div>
    <div class="">
  <div>
    <a href="/"><btn_add_project></btn_add_project></a>
    <btn_go_over></btn_go_over>
   </div>
    </div>     
    </div>

    </div>
</template>