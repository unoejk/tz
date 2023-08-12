<script setup="">
    // pinia
    import {useConnector} from "../../stores/connector";
    const {setPageToList}=useConnector()
    // reactive pinia
    import {storeToRefs} from 'pinia'
    const {isList}=storeToRefs(useConnector())
</script>

<template>
    <div class="wrapForMainPageWrapper">
        <div class="header">
            <div class="header_left">
                <img class="header_left__logo" src="https://alef.im/img/svg/logo.svg" alt="Alef Development">
            </div>
            <div class="header_center">
                <button class="header_center__navBtn" @click="setPageToList(false)">Форма</button>
                <button class="header_center__navBtn" @click="setPageToList(true)">Превью</button>
            </div>
        </div>
        <div class="main">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $mainMaxWidth: 900px;
    .wrapForMainPageWrapper{
        background-color: #fdfdfe;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .header{
        background-color: #fdfdfe;
        height: 70px;
        display: flex;
        justify-content: center;
        position: relative;
        border-bottom: rgba(56, 56, 57, 0.6) solid 2px;
        &_left{
            position: absolute;
            left: 0;
            height: 100%;
            display: flex;
            align-items: center;
            &__logo{
                margin-left: 10px;
                height: 80%;
            }
        }
        &_center{
            position: absolute;
            display: flex;
            height: 100%;
            &__navBtn{
                background-color: inherit;
                font: inherit;
                cursor: pointer;
                border: none;
                border-radius: inherit;
                //----
                color: #383839;
                height: 100%;
                padding: 0 20px;
                font-size: 1.2rem;
                transition: all .3s ease-in-out;
                &:hover{
                    color: #01a6fc;
                    transition: all .3s ease-in-out;
                }
            }
        }
    }
    .main{
        margin: 0 auto;
        width: 100%;
        max-width: $mainMaxWidth;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
</style>