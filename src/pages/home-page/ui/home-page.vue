<script>
import headerr from '@/widgets/header/header-main/header.vue';
import footerr from '@/widgets/footer/footer.vue';
import main_central_box from '@/widgets/central_box/main_central_box/main_central_box.vue';
export default {
  components: {
    headerr,
    footerr,
    main_central_box
  }
}
</script>

<template>

  <div class="flex flex-col overflow-x-hidden">
    
    <div>
      <header class="z-10">
        <headerr></headerr>
        <!-- <img class="absolute bottom-[350px] left-1/4 -z-10 rotate-90" src="/src/shared/assets/icons/mainpage_shadow.svg" alt="blue"> -->
      </header>
      <main class="flex-grow z-10">
        <main_central_box></main_central_box>
      </main>
      <footer>
        <footerr></footerr>
      </footer>

    </div>
  </div>
</template>