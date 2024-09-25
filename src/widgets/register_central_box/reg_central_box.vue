<script>
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import input_login from '@/shared/ui/inputs/input_login.vue'
import input_name from '@/shared/ui/inputs/input_name.vue';
import welcome from "@/widgets/register_text_under_header/1.4 welcome.vue"

export default {
  components: {
    btn_next,
    input_name,
    input_login,
    welcome
  }
}
</script>

<template>
  <div className="w-1/2 flex justify-between
    absolute left-1/4 top-1/4">
    <welcome></welcome>
  </div>

  <div className="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div className="h-full w-full flex flex-col relative left-1/3">
      <div className="h-28 w-9"></div>
      <div className="">
        <div className="">
          <input_name></input_name>
        </div>
        <div className="mt-5">
          <input_login></input_login>
        </div>
        <a href="/register1">
          <btn_next>
            <p>Далее</p>
          </btn_next>
        </a>
      </div>
    </div>


  </div>
</template>