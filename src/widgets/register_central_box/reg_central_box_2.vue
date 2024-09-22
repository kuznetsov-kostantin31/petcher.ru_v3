<script>
import btn_next from '@/shared/ui/buttons/button_next.vue'
import button_specialties from '@/shared/ui/buttons/button_specialties.vue';
import under_header_text from '@/widgets/register_text_under_header/4.4.vue'


export default {
  components: {
    btn_next,
    button_specialties,
    under_header_text
  }
}
</script>

<template>
  <div class="flex">
    <div class="w-1/2 flex justify-between
    absolute left-1/4 top-1/4">
      <under_header_text></under_header_text>
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
                <btn_next></btn_next>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>