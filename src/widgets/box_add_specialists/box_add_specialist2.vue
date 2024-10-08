<script>
import text_name from '@/shared/ui/texts/text_name_box_add.vue';
import text_title from '@/shared/ui/texts/text_title_box_add.vue';
import button_white from '@/shared/ui/buttons/button_white1.vue';
import text_tools from '@/shared/ui/texts/text_tools_box_add.vue';
import button_tools from '@/shared/ui/buttons/button_white2.vue';


export default{
    components: {
        text_name,
        text_title,
        button_white,
        text_tools,
        button_tools,
        
    
        
    }
}
</script>

<template>

<div class="relative flex flex-col items-start gap-2.5 w-100% md:w-full  shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex-none order-none mx-5 mb-7 grow-0 px-8 py-6 rounded-lg bg-white"> 

  
    <text_name>Кузницов Константин</text_name>
    <text_title>Spons-создать свой ИИ.</text_title>
    <div class="mt-6 flex flex-wrap">
        <button_white>Web-дизайнер</button_white>
        <button_white>Frontend-разработчик</button_white>
        <button_white>Backend-разработчик</button_white>
        <button_white>DevOps</button_white>
        
    </div>
    <text_tools>Инструменты</text_tools>
    <div class="mb-5 flex flex-wrap">
        <button_tools>Figma</button_tools>
        <button_tools>Photoshop</button_tools>
        <button_tools>UI-kit</button_tools>
        <button_tools>Анимация</button_tools>
        <button_tools>Гадлайны</button_tools>
    </div>
</div>

</template>
