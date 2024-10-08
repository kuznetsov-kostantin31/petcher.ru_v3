<template>
    <div class="border">
        <p class="font_Unbounded">
            <slot></slot>
        </p>
    </div>
</template>

<style scoped>
.border {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 3px 8px;
    gap: 10px;
    height: 26px;
    border: 1px solid rgba(6, 124, 255, 0.5);
    color: gray;
    border-radius: 16px;
    font-family: 'Unbounded';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;

}

.border:active {
    background: #1E9CFF;
    border:  1px solid #1E9CFF;
    color: white;
}
</style>