<script setup="">
    // pinia
    import {useConnector} from "../stores/connector";
    // reactive pinia
    import {storeToRefs} from 'pinia'
    const {usersList}=storeToRefs(useConnector())
    // fast func from pinia
</script>

<template>
    <div class="wrapForList">
        <h2 class="mistakeMessage" v-if="usersList[0]===undefined">Пока никого не добавили</h2>
        <div
                class="userCard"
                :class="{'userCard-many':usersList[1]!==undefined}"
                v-for="(userItem,userIndex) in usersList"
        >
            <div class="userCard_personalBlock">
                <h2 class="userCard_personalBlock__title">Персональные данные</h2>
                <h2 class="userCard_personalBlock__userInfo">{{userItem.userName+', '+userItem.userAge+' лет'}}</h2>
            </div>
            <h2 class="userCard__messageAboutChildfree" v-if="userItem.childs[0]===undefined">Детей нет</h2>
            <div class="userCard_childsBlock" v-if="userItem.childs[0]!==undefined">
                <h2 class="userCard_childsBlock__title">Дети</h2>
                <div class="userCard_childsBlock__childCard" v-for="(childItem,childIndex) in userItem.childs">
                    {{childItem.childName+', '+childItem.childAge+' лет'}}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapForList{
        display: flex;
        flex-direction: column;
        gap: 80px;
        padding: 80px;
    }
    .mistakeMessage{
        text-align: center;
    }
    .userCard{
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 80px;
        &_personalBlock{
            display: flex;
            flex-direction: column;
            gap: 20px;
            &__title{}
            &__userInfo{
                font-family: Montserrat Bold, sans-serif;
            }
        }
        &__messageAboutChildfree{}
        &_childsBlock{
            display: flex;
            flex-direction: column;
            gap: 20px;
            &__title{}
            &__childCard{
                font-family: Montserrat Bold, sans-serif;
                background-color: rgba(56, 56, 57, 0.2);
                outline: inherit;
                border-radius: 10px;
                padding: 20px;
                width: fit-content;
            }
        }
        &-many{
            border: 2px solid rgba(56, 56, 57, 0.6);
            padding: 20px;
        }
    }
</style>