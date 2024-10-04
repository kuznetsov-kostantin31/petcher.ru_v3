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
  <div class="flex">
    <div class="w-1/2 flex justify-between
    absolute left-1/4 top-1/4">
      <text_under_left>Выберите свою специальность</text_under_left>
      <text_under_right>4/4</text_under_right>
    </div>

    <div class="w-1/2 flex justify-center
    absolute left-1/4 top-72">
      <div class="h-full w-full flex flex-col relative left-1/3">
        <div class="h-28 w-9"></div>
        <div class="">
          <div>
            <div class="">
              <button_specialties></button_specialties>
              <a href="/register3">
                <btn_next>Далее</btn_next>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>