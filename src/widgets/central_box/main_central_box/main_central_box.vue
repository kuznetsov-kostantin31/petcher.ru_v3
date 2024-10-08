<script>
import welcome from '@/widgets/header_text_under/text_under_left.vue'
import box_add from '@/widgets/box_add_specialists/box_add_specialist2.vue';

export default{
    components:{
       welcome,
       box_add
    }
}
</script>

<template>
  <div class="relative h-[1396px] flex flex-col items-center">
    <div class="w-80 absolute top-[52px] left-[5%] md:left-[26.5%] ">
        <welcome>Добрый день, Саня!Проекты для вас</welcome>
    </div>

    <div class="mt-52 p-0 gap-8 md:w-[832px] h-[796px]">
      <box_add></box_add>
    </div>
  </div>
   
</template>