<script>
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import input_login_or_email from '@/shared/ui/inputs/input_login_or_email_1.vue'
import recover_password from '@/widgets/register_text_under_header/recover_password.vue';

export default {
  components: {
    btn_next,
    input_login_or_email,
    recover_password
  }
};
</script>

<template>
  <div className="w-1/2 flex justify-start
    absolute left-1/4 top-1/4">
    <recover_password></recover_password>
  </div>

  <div className="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div className="h-full w-full flex flex-col relative left-1/3">
      <div className="h-28 w-9"></div>
      <div className="">
        <div className="">
          <input_login_or_email></input_login_or_email>
        </div>
        <a href="/register6">
          <btn_next>Далее</btn_next>
        </a>
      </div>
    </div>


  </div>
</template>