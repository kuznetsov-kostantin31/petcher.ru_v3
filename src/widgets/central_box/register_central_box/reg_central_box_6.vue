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

  <div className="w-1/2 flex justify-start
    absolute left-1/4 top-1/4">
    <text_under_left>Восстановление пароля</text_under_left>
  </div>

  <div className="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div className="h-full w-full flex flex-col relative left-1/3">
      <div className="h-28 w-9"></div>
      <div className="w-[350px]">
        <div>
          <input_cells></input_cells>
          <a href="/register7">
            <btn_next>Далее</btn_next>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
