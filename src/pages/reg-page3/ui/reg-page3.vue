<script>
import headerr from '@/widgets/header/header-reg/header.vue';
import reg_central_box_3 from '@/widgets/register_central_box/reg_central_box_3.vue';


export default{
  components:{
    headerr,
    reg_central_box_3
  }
}
</script>

<template>
  <div class="flex">
    <header>
      <headerr></headerr>     
    </header>
  <main>
    <reg_central_box_3></reg_central_box_3>
  </main>

  </div>
</template>
