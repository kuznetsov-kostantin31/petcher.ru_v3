<script>
import btn_add_project from '@/shared/ui/buttons/button_blue.vue';
import button_grey from '@/shared/ui/buttons/button_grey.vue';
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';
import text_under_under from '@/widgets/header_text_under/text_under_under.vue';

export default {
  components: {
    btn_add_project,
    text_under_left,
    text_under_under,
    button_grey

  }
}
</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1280px] px-16 justify-start">
        <div class="w-[330px]">
          <text_under_left>Регистрация прошла успешно</text_under_left>
          <text_under_under>Поздравляем!</text_under_under>
        </div>

      </div>
    </div>
    <div class="m-auto mt-60 flex flex-col items-center">
      <a href="/">
        <btn_add_project>Добавить проект</btn_add_project>
      </a>
      <div class="mt-1">
        <a href="">
        <button_grey>Перейти</button_grey>
      </a>
      </div>
    </div>
  </div>

</template>

