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
            <div class="header_left"></div>
            <div class="header_center">
                <button
                        class="header_buttonReplete"
                        :class="{'header_buttonReplete-choiced':!isList}"
                        @click="setPageToList(false)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <span>Форма</span>
                </button>
                <button
                        class="header_buttonReplete"
                        :class="{'header_buttonReplete-choiced':isList}"
                        @click="setPageToList(true)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M80 48H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416-136H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16z"/></svg>
                    <span>Превью</span>
                </button>
            </div>
            <div class="header_right"></div>
        </div>
        <div class="main">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $mainMaxWidth: 1200px;
    .wrapForMainPageWrapper{
        background-color: #2b2b2c;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .header{
        background-color: #3c3f41;
        height: 50px;
        display: flex;
        justify-content: center;
        position: relative;
        &_left{
            position: absolute;
            left: 0;
            height: 100%;
        }
        &_center{
            position: absolute;
            display: flex;
            height: 100%;
        }
        &_right{
            position: absolute;
            right: 0;
            height: 100%;
        }
        &__title{
            background-color: inherit;
            font: inherit;
            cursor: pointer;
            border: none;
            border-radius: inherit;
            //----
            font-size: 2.4rem;
            height: 100%;
            padding: 0 20px;
            &:hover{
                background-color: #2b2b2c;
                transition: all .3s ease-in-out;
            }
            &:active{
                transition: all .1s ease-in-out;
                color: #ffa500;
            }
        }
        &__text{
            color: aliceblue;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 1rem;
            height: 100%;
            margin: 0 20px;
        }
        &_buttonReplete{
            background-color: inherit;
            font: inherit;
            cursor: pointer;
            border: none;
            border-radius: inherit;
            //----
            color: aliceblue;
            display: flex;
            align-items: center;
            gap: 10px;
            height: 100%;
            padding: 0 20px;
            font-size: 1.2rem;
            transition: all .3s ease-in-out;
            &>svg{
                fill: aliceblue;
                height: 1.2rem;
            }
            &>span{
                color: aliceblue;
                padding: 0;
            }
            &:hover{
                background-color: #2b2b2c;
                transition: all .3s ease-in-out;
            }
            &:active{
                transition: all .1s ease-in-out;
                color: orange;
                &>svg{
                    transition: all .1s ease-in-out;
                    fill: orange;
                }
                &>span{
                    transition: all .1s ease-in-out;
                    color: orange;
                }
            }
            &-choiced{
                color: orange;
                &>svg{
                    fill: orange;
                }
                &>span{
                    color: orange;
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
    @media screen and (max-width: 767px){
        .header__title{
            font-size: 2rem;
            line-height: 2.5rem;
        }
        .header_center>.header_buttonReplete{
            &>span{
                display: none;
            }
        }
    }
</style>