<script>
import axios from 'axios';
import btn_back from '@/shared/ui/buttons/button_grey.vue'
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import input_password from '@/shared/ui/inputs/input_password.vue';
import input_email from '@/shared/ui/inputs/input_email.vue'
import text_under_right from '@/widgets/header_text_under/text_under_right.vue';



export default {
  components: {
    btn_back,
    btn_next,
    input_password,
    input_email,
    text_under_right

  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async register() {
      const { name, login } = this.$route.params;

      if (!name || !login) {
        this.error = 'Ошибка: отсутствуют данные пользователя';
        return;
      }

      try {
        const response = await axios.post('http://localhost:7000/auth/registration', {
          name,
          login,
          email: this.email,
          password: this.password
        });

        this.$store.dispatch('login', response.data.token);
        this.$router.push('/');
      } catch (error) {
        this.error = 'Ошибка регистрации';
      }
    }
  }
}
</script>

<template>
  <div className="w-full flex flex-col items-baseline
  absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex w-[1280px] px-16 justify-end">
        <text_under_right>2/4</text_under_right>
      </div>
    </div>
  <form @submit.prevent="register" class="m-auto mt-60 flex flex-col">
    <div>
      <input_email :email="email" @update-email="email = $event"></input_email>
    </div>
    <div class="mt-4">
      <input_password :password="password" @update-password="password = $event" ></input_password>
    </div>
    <div class="flex flex-col items-center">
      <a href="/register2">
      <btn_next type="submit">Далее</btn_next>
      </a>
      <a href="/register" class="mt-1">
      <btn_back>назад</btn_back>
      </a>
    </div>
   
  </form>
  <p v-if="error">{{ error }}</p>
</div>

</template>

