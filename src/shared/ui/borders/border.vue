<template>
    <div class=" flex flex-col justify-center items-start gap-2.5 w-[479px] h-[46px] shadow-[0px_0px_4px_rgba(0,0,0,0.1)] flex-none order-none self-stretch grow-0 px-4 py-2 rounded-2xl"><p class="font_Unbounded"><slot></slot></p></div>
</template>

<style scoped>
.font_Unbounded{
    /* Бизнес-аналитик */

width: 447px;
height: 30px;

/* btn/main */
font-family: 'Unbounded';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
/* identical to box height */

color: #067CFF;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


}
</style>