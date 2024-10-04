<script>
import input_password from '@/shared/ui/inputs/imput_password.vue';
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import btn_no_account from '@/shared/ui/buttons/button_grey.vue';
import btn_forgot_your_password from '@/shared/ui/buttons/button_grey.vue';
import input_login_or_email from '@/shared/ui/inputs/input_login_or_email.vue';
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';


export default {
  components: {
    input_password,
    btn_next,
    btn_no_account,
    btn_forgot_your_password,
    input_login_or_email,
    text_under_left
  }
}

</script>

<template>

  <div className="w-1/2 flex justify-start
    absolute left-1/4 top-1/4">
    <text_under_left>Добро пожаловать в Patcher</text_under_left>
  </div>

  <div className="w-1/2 flex justify-center
    absolute left-1/4 top-72">
    <div className="h-full w-full flex flex-col relative left-1/3">
      <div className="h-28 w-9"></div>
      <div className="">
        <div className="">
          <input_login_or_email></input_login_or_email>
        </div>
        <div className="mt-5">
          <input_password></input_password>
        </div>
        <a href="/">
          <btn_next>Далее</btn_next>
        </a>
        <div class="flex justify-end h-[38px] w-[379px]">
          <div class="flex flex-col items-end">
            <a href="/register">
              <btn_no_account>Ещё нет аккаунта? Зарегестрироваться</btn_no_account>
            </a>
            <a href="/register5">
              <btn_forgot_your_password>Забыли пароль?</btn_forgot_your_password>
            </a>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>
