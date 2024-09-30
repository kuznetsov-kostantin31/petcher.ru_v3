<script>
import reg_central from "@/widgets/register_central_box/reg_central_box.vue"
import headerr from '@/widgets/header/header-reg/header.vue';

export default {
  components:{
    reg_central,
    headerr
  }
}
</script>

<template>
  <header>
    <headerr></headerr>
  </header>
  <main>
    <reg_central></reg_central>
  </main>
</template>
