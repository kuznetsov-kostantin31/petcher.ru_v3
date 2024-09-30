<script>
import welcome from '@/widgets/main_text_under_header/welcome.vue'

export default{
    components:{
       welcome
    }
}
</script>

<template>
 
 <!-- <img class="absolute bottom-3 rotate-90" src="/src/shared/assets/icons/mainpage_shadow.svg" alt=""> -->
  <div class="h-[1396px] flex flex-col items-center">
    <div class="w-2/5  absolute top-[122px]">
        <welcome></welcome>
    </div>

    <div class="p-0 gap-8 w-[832px] h-[796px]">
      
    </div>
  </div>
   
</template>