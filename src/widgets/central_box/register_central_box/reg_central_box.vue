<script>
import btn_next from '@/shared/ui/buttons/button_blue.vue'
import input_login from '@/shared/ui/inputs/input_login.vue'
import input_name from '@/shared/ui/inputs/input_name.vue';
import text_under_right from '@/widgets/header_text_under/text_under_right.vue';
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';

export default {
  components: {
    btn_next,
    input_name,
    input_login,
    text_under_left,
    text_under_right

  },
  data() {
    return {
      name: '',
      login: '',
    };
  },
  methods: {
    
  }
};
</script>

<template>
    <div className="w-full flex flex-col items-baseline
    absolute top-[15.5%]">
    <div class="flex justify-between  w-full h-[58px] left-0 top-0">
      <div class="m-auto flex md:w-[1280px] md:px-16 md:justify-between">
    <text_under_left>Добро пожаловать в Patcher</text_under_left>
    <div class="hidden md:block"><text_under_right>1/4</text_under_right></div>
  </div>
</div>

    <form  @submit.prevent="goToNextStep" class="m-auto mt-60 flex flex-col">
      <div>
        <input_name :username="username" @update-username="username = $event"></input_name>
      </div>
      <div class="mt-3">
        <input_login :loginName="loginName" @update-login-name="loginName = $event"></input_login>
      </div>
          
        <a href="/register1">
          <btn_next type="submit">
            <p>Далее</p>
          </btn_next>
        </a>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>


</template>
