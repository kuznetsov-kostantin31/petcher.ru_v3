<script>
import axios from 'axios';
import input_password from '@/shared/ui/inputs/input_password.vue';
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
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5173/register4', {
          email: this.email,
          password: this.password
        });

        this.$emit('login-success', response.data.token);
      } catch (error) {
        this.error = 'Ошибка входа';
      }
    }
  }
}

</script>

<template>
  <div className="w-full flex flex-col items-baseline
    absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1280px] px-16 justify-between">
        <text_under_left>Добро пожаловать в Patcher</text_under_left>
      </div>
    </div>

    <div @submit.prevent="login" class="m-auto mt-60 flex flex-col">
      <div>
        <input_login_or_email :email="email" @update-email="email = $event"></input_login_or_email>
      </div>
      <div>
        <input_password :password="password" @update-password="password = $event" ></input_password>
      </div>
      <a href="/">
        <btn_next @click="login">Далее</btn_next>
      </a>
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

</template>