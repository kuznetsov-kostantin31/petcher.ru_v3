<script>
import headerr from '@/widgets/header/header-main/header.vue';
import footerr from '@/widgets/footer/footer.vue';
import main_central_box from '@/widgets/main_central_box/main_central_box.vue';
export default {
  components: {
    headerr,
    footerr,
    main_central_box
  }
}
</script>

<template>

  <div class="flex flex-col min-h-full">
    <div>
      <header class="z-0">
        <headerr></headerr>
      </header>
      <main class="flex-grow -z-10">
        <main_central_box></main_central_box>
      </main>
      <footer>
        <footerr></footerr>
      </footer>

    </div>
  </div>
</template>