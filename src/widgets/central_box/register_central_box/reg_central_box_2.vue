<script>
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import button_specialties from '@/shared/ui/buttons/button_specialties.vue';
import text_under_right from '@/widgets/header_text_under/text_under_right.vue';
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';


export default {
  components: {
    btn_next,
    button_specialties,
    text_under_right,
    text_under_left
  }
}
</script>

<template>
    <div className="w-full flex flex-col items-baseline
      absolute top-[15.5%]">
      <div class="flex justify-between  w-full h-[58px] left-0 top-0">
        <div class="m-auto flex w-[1280px] px-16 justify-between">
          <text_under_left>Выберите свою специальность</text_under_left>
          <text_under_right>4/4</text_under_right>
        </div>
      </div>
      <div class="m-auto mt-60 flex flex-col">
        <button_specialties></button_specialties>
        <a href="/register3">
          <btn_next>Далее</btn_next>
        </a>
      </div>
    </div>
</template>
