<script>
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';
import text_under_right from '@/widgets/header_text_under/text_under_right.vue';
import button_blue from '@/shared/ui/buttons/button_blue.vue';
import button_grey from '@/shared/ui/buttons/button_grey.vue';
import border from '@/shared/ui/borders/border.vue'
import text from '@/shared/ui/texts/text.vue';
import box_add from '@/widgets/box_add_specialists/box_add_specialist.vue';
import box_add1 from '@/widgets/box_add_specialists/box_add_specialist1.vue';
export default{
    components:{
        text_under_left,
        text_under_right,
        button_blue,
        button_grey,
        border,
        text,
        box_add,
        box_add1
    }
}
</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-[15%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1250px] px-14 justify-between">
         <text_under_left>Добавление специалистов</text_under_left>
         <text_under_right>2/4</text_under_right>
      </div>
    </div>
    <div class="flex flex-row gap-10 m-auto mt-16">
      <div class="flex flex-col gap-4">
        <box_add></box_add>
        <box_add1></box_add1>
      </div>
      <div class="flex flex-col gap-3">
        <border>Frontend-разработчик</border>
        <border>Python-разработчик</border>
        <border>Java-разработчик</border>
        <border>1C-разработчик</border>
      </div>
    </div>
    <div class="m-auto mt-52 flex flex-col items-center gap-2">
      <a href="project_create_page2"><button_blue>Далее</button_blue></a>
      <a href="project_create_page"><button_grey>назад</button_grey></a>
    </div>
    
  </div>
</template>