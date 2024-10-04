<script>
import textt from '@/shared/ui/texts/text.vue';
import input_ui_kit from '@/shared/ui/inputs/input_ui_kit.vue';
import button_white from '@/shared/ui/buttons/button_white.vue';

export default{
    components: {
    textt,
    input_ui_kit,
    button_white
        
    }
}
</script>

<template>

<div class="flex flex-col justify-center items-start gap-2.5 w-[560px] h-[120px] shadow-[0px_0px_4px_rgba(0,0,0,0.1)] flex-none order-1 grow-0 px-2 py-3 rounded-2xl bg-blue-600"> 
<textt>Бизнес-аналитик</textt>
<input_ui_kit></input_ui_kit>
<div class="flex">
<button_white>BPMN</button_white>
<button_white>Drawio</button_white>
<button_white>SQL</button_white>
<button_white>Miro</button_white>
<button_white>Интервью</button_white>
<button_white>Google Sheets</button_white>
</div>



</div>

</template>

