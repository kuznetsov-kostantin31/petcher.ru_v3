<script>
import headerr from '@/widgets/header/header-reg/header.vue';
import reg_central_box_2 from '@/widgets/central_box/register_central_box/reg_central_box_2.vue';

export default {
  components: {
    headerr,
    reg_central_box_2
  },
};
</script>

<template>
  <div class="flex">
    <header>
      <headerr></headerr>
    </header>
    <main>
      <reg_central_box_2></reg_central_box_2>
    </main>

  </div>
</template>
