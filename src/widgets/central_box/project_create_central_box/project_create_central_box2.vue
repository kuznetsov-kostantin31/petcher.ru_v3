<script>
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';
import text_under_right from '@/widgets/header_text_under/text_under_right.vue';
import input_project_create from '@/shared/ui/inputs/input_project_create1.vue';
import button_blue from '@/shared/ui/buttons/button_blue.vue';
import button_grey from '@/shared/ui/buttons/button_grey.vue';

export default{
    components:{
        text_under_left,
        text_under_right,
        input_project_create,
        button_blue,
        button_grey
    }
}
</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-1/4">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1250px] px-14 justify-between">
         <text_under_left>Напишите информацию о проекте</text_under_left>
         <text_under_right>3/4</text_under_right>
      </div>
    </div>
    <div class="m-auto mt-40 flex flex-col ">
      
      <input_project_create></input_project_create>
      <div class="flex flex-col items-center gap-2">
      <a href="/project_create_page3"><button_blue>Далее</button_blue></a>
      <a href="/project_create_page1"><button_grey>назад</button_grey></a>
    </div>
    </div>
    
  </div>
</template>