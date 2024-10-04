<template>
    <div class="border"><p class="font_Unbounded"><slot></slot></p></div>
</template>

<style scoped>
.border{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: 26px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 16px;
    border: 1px solid white;
}

.font_Unbounded{

font-family: 'Unbounded';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;

}

.font_Unbounded:active{
    color: #067CFF
}
.border:active{
     background: white; 
}

</style>