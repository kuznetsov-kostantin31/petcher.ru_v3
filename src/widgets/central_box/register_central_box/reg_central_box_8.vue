<script>
import btn_next_work from '@/shared/ui/buttons/button_blue.vue'
import text_under_under from '@/widgets/header_text_under/text_under_under.vue';
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';

export default {
  components: {
    text_under_left,
    text_under_under,
    btn_next_work
  }
}
</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1280px] px-16 ">
        <div class="w-80">
          <text_under_left>Восстановление прошло успешно</text_under_left>
          <text_under_under>Поздравляем!</text_under_under>
        </div>  
      </div>
    </div> 
    <div class="m-auto mt-60 flex flex-col">
        <a href="/">
          <btn_next_work>Продолжить работу</btn_next_work>
        </a>
    </div>
  </div>
</template>
