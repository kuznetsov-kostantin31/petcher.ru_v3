<script>
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';
import text_under_right from '@/widgets/header_text_under/text_under_right.vue';
import input_project_create from '@/shared/ui/inputs/input_project_create.vue';
import button_blue from '@/shared/ui/buttons/button_blue.vue';

export default{
    components:{
        text_under_left,
        text_under_right,
        input_project_create,
        button_blue
    }
}
</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1280px] px-16 justify-between">
         <text_under_left>Создание проекта</text_under_left>
         <text_under_right>1/4</text_under_right>
      </div>
    </div>
    <div class="m-auto mt-60 flex flex-col">
      
      <input_project_create></input_project_create>
      <a href="/project_create_page1"><button_blue>Далее</button_blue></a>
    </div>
    
  </div>
</template>