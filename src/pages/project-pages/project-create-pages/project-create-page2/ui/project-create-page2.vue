<script>
import headerr from '@/widgets/header/header-main/header.vue';
import project_create_central_box from '@/widgets/central_box/project_create_central_box/project_create_central_box2.vue';
export default {
  components: {
    headerr,
    project_create_central_box
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
       <project_create_central_box></project_create_central_box>
      </main>
      <footer>
        
      </footer>

    </div>
  </div>
</template>