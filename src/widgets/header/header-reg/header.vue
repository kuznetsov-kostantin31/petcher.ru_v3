<script>
import btn_black from '@/shared/ui/buttons/button_black.vue';


export default {
   components: {
      btn_black
   }
}
</script>

<template>
   <nav
      className="flex justify-between bg-white relative w-full z-10 h-[58px] shadow-[0px_0px_4px_rgba(0,104,255,0.25)] left-0 top-0">
      <button class="ml-5 inline-block md:hidden">
         <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M18.75 6.75H1.25C0.559648 6.75 0 7.30965 0 8C0 8.69035 0.559648 9.25 1.25 9.25H18.75C19.4404 9.25 20 8.69035 20 8C20 7.30965 19.4404 6.75 18.75 6.75Z"
               fill="#067CFF" />
            <path
               d="M1.25 3.417H18.75C19.4404 3.417 20 2.85735 20 2.167C20 1.47664 19.4404 0.916992 18.75 0.916992H1.25C0.559648 0.916992 0 1.47664 0 2.167C0 2.85735 0.559648 3.417 1.25 3.417Z"
               fill="#067CFF" />
            <path
               d="M18.75 12.584H1.25C0.559648 12.584 0 13.1436 0 13.834C0 14.5243 0.559648 15.084 1.25 15.084H18.75C19.4404 15.084 20 14.5243 20 13.834C20 13.1436 19.4404 12.584 18.75 12.584Z"
               fill="#067CFF" />
         </svg>

      </button>
      <div class="flex justify-between m-auto w-[1450px]">
         <div className="
          mx-auto my-auto  h-[27px] w-[91px]"><img src="/src/shared/assets/img/petcher-icon-header.png" alt="d">
         </div>
         <div class="mx-auto my-auto hidden md:flex justify-between gap-16 w-[365px] h-5 ">
         
         </div>
         <div class="mx-auto my-auto flex justify-end md:justify-between gap-6 w-[120px] h-5 ">
          

         </div>
      </div>

   </nav>

</template>