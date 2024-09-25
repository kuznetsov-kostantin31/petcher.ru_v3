<script>
import btn_add_project from '@/shared/ui/buttons/button_blue.vue';
import final_text_reg from '@/widgets/register_text_under_header/final_text_reg.vue';
import btn_go_over from '@/shared/ui/buttons/button_grey.vue'

export default {
  components: {
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
    <div class="h-full w-full flex flex-col  relative left-1/3">
      <div class="h-28 w-9"></div>
      <div class="flex items-center  ">
        <div class="flex flex-col items-center gap-2 ">
          <a href="/">
            <btn_add_project>Добавить проект</btn_add_project>
          </a>
          <a href="">
            <btn_go_over>Перейти</btn_go_over>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>