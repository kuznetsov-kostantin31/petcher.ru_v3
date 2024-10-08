<script>
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import recover_password from '@/widgets/header_text_under/text_under_left1.vue';
import input_cells from '@/shared/ui/inputs/input_cells.vue';
import text_under_left from '@/widgets/header_text_under/text_under_left1.vue';

export default {
  components: {
    btn_next,
    text_under_left,
    input_cells
  },

};
</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1280px] px-16 ">
        <text_under_left>Восстановление пароля</text_under_left>
      </div>
    </div>
    <div class="m-auto mt-60 flex flex-col">
      <div>
        <input_cells></input_cells>
      </div>
      <a href="/register7">
        <btn_next>Далее</btn_next>
      </a>
    </div>
  </div>
</template>
