<script>
export default {
  props: ['loginName'],
  emits: ['update-login-name'],
  data() {
    return {
      localLoginName: this.loginName
    };
  },
  methods: {
    updateLoginName() {
      this.$emit('update-login-name', this.localLoginName);
    }
  }
};
</script>

<template>
    <p class="font_WMD">Введите свой логин</p>
    <input v-model="localLoginName" @input="updateLoginName" class="font_WMD_2" type="text" placeholder="ausdam">
</template>

<style scoped>
.font_WMD {
    font-family: 'Wix Madefor Display';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #067CFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.font_WMD_2 {
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: #067CFF;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 0.5rem;
    flex-direction: row;
    flex-wrap: wrap;
    flex: none;
    flex-grow: 0;
    order: 1;
    gap: 0.625rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: #000000;
    width: 376px;
    height: 31px;

}
</style>