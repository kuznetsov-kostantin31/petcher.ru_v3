<script>
import text_under_left from '@/widgets/header_text_under/text_under_left.vue';
import button_grey from '@/shared/ui/buttons/button_grey.vue';
import text_under_under from '@/widgets/header_text_under/text_under_under.vue';
import button_blue from '@/shared/ui/buttons/button_blue1.vue';
import central_text from '@/widgets/central_text/project_create_central_text.vue';


export default {
    components: {
        text_under_left,
        button_grey,
        text_under_under,
        button_blue,
        central_text
    }
}
</script>

<template>
    <div className="w-full flex flex-col items-baseline
    absolute top-1/4">
        <div class="w-1/2 flex justify-start flex-col
    absolute left-1/4 top-1/5">
            <div class="w-80">
                <text_under_left>Проект добавлен успешно</text_under_left>
                <text_under_under>Поздравляем!</text_under_under>
            </div>


        </div>
        <div class="m-auto mt-40 flex flex-col">
            <div
                class="box-border flex flex-col justify-center items-center gap-4 border px-0 py-4 rounded-2xl border-solid border-[rgba(0,0,0,0.05)]">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="128" height="128" rx="64" fill="#067CFF" />
                    <path
                        d="M49.4764 94C47.1488 94.001 44.9164 93.0632 43.2719 91.3936L24.5138 72.3872C22.4954 70.3407 22.4954 67.0233 24.5138 64.9768C26.5328 62.931 29.8057 62.931 31.8247 64.9768L49.4764 82.8687L96.1753 35.5344C98.1943 33.4885 101.467 33.4885 103.486 35.5344C105.505 37.5809 105.505 40.8983 103.486 42.9448L55.6809 91.3936C54.0363 93.0632 51.804 94.001 49.4764 94Z"
                        fill="white" />
                </svg>

                <div class="w-[400px] ">
                    <central_text>Проект был добавлен</central_text>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <a href="/"><button_blue>Продолжить</button_blue></a>
                    <a href="project_create_page3"><button_grey>назад</button_grey></a>
                </div>
            </div>
        </div>

    </div>
</template>