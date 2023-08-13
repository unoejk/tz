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
        <div class="userCard alignCenter" v-if="usersList[0]===undefined">
            <h2 class="userCard__mistakeMessage">Пока никого не добавили</h2>
        </div>
        <div class="userCard" v-for="(userItem,userIndex) in usersList">
            <h2 class="userCard__userInfo">{{userItem.userName+', '+userItem.userAge+' лет'}}</h2>
            <p class="userCard__message">дети:</p>
            <div class="userCard_childsBlock">
                <div class="userCard_childsBlock__childInfo" v-for="(childItem,childIndex) in userItem.childs">
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
        gap: 60px;
        padding: 60px;
    }
    .userCard{
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        &__userInfo,&__mistakeMessage{}
        &__message{}
        &_childsBlock{
            display: flex;
            gap: 10px;
            &__childInfo{
                font: inherit;
                background-color: rgba(56, 56, 57, 0.2);
                outline: inherit;
                border-radius: 10px;
                padding: 10px;
                width: fit-content;
                height: fit-content;
                transition: all .3s ease-in-out;
            }
        }
    }
</style>