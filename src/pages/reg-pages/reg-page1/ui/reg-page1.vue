<script>
import headerr from '@/widgets/header/header-reg/header.vue';
import reg_central_box_1 from '@/widgets/central_box/register_central_box/reg_central_box_1.vue';

export default {
  components:{
    headerr,
    reg_central_box_1

  },
};
</script>

<template>
   <header>
   <headerr></headerr>
  </header>
  <main>
   <reg_central_box_1></reg_central_box_1>
  </main>
</template>
