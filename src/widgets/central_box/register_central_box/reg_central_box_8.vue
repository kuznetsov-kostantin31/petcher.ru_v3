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
  <div class="w-1/2 flex justify-start flex-col
    absolute left-1/4 top-1/4">
    <text_under_left>Восстановление прошло успешно</text_under_left>
    <text_under_under>Поздравляем!</text_under_under>
  </div>

  <div class="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div class="h-full w-full flex flex-col relative left-1/3">
      <div class="h-28 w-9"></div>
      <div class="">
        <div>
          <a href="/">
            <btn_next_work>Продолжить работу</btn_next_work>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>