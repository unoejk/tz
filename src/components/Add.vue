<script setup="">
    // core
    import {ref} from 'vue'
    // _global
    import {deepClone} from '../stores/_global'
    // pinia
    import {useConnector} from "../stores/connector";
    const {setPageToList,addUser}=useConnector()
    // reactive pinia
    import {storeToRefs} from 'pinia'
    const {isList,usersList,mistakesArray}=storeToRefs(useConnector())

    // new user
    const defaultUser={
        userName:undefined,
        userAge:undefined,
        childs:[
            {
                childName:undefined,
                childAge:undefined,
            }
        ],
    }
    const user=ref(deepClone(defaultUser))

    //ttt
    const ttt=()=>{
        console.log()
    }
    ttt()
</script>

<template>
    <div class="wrapForAdd">
        <div class="userBlock">
            <h2 class="userBlock__header">Персональные Данные</h2>
            <div class="userBlock__fakeInput fakeInput">
                <span>Имя</span>
                <input type="text" v-model="user.userName">
            </div>
            <div class="userBlock__fakeInput fakeInput">
                <span>Возраст</span>
                <input type="text" v-model="user.userAge">
            </div>
        </div>
        <div class="childsBlock">
            <div class="childsBlock_headerBlock">
                <h2 class="childsBlock_headerBlock__title">Дети (макс. 5)</h2>
                <button class="childsBlock_headerBlock__addChildBtn" v-if="user.childs.length<5" @click="user.childs.push({})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <span>Добавить ребёнка</span>
                </button>
            </div>
            <div class="childsBlock_newChild" v-for="(childItem,childIndex) in user.childs">
                <div class="childsBlock_newChild__fakeInput fakeInput">
                    <span>Имя</span>
                    <input type="text" v-model="user.childs[childIndex].childName">
                </div>
                <div class="childsBlock_newChild__fakeInput fakeInput">
                    <span>Возраст</span>
                    <input type="text" v-model="user.childs[childIndex].childAge">
                </div>
                <button class="childsBlock_newChild__removeBtn" @click="user.childs.splice(childIndex,1)">Удалить</button>
            </div>
        </div>
        <button class="saveBtn" @click="[addUser(user),user=deepClone(defaultUser)]">Сохранить</button>
        <div class="mistakesList" v-if="mistakesArray[0]!==undefined">
            <p v-for="(mistakesItem,mistakesIndex) in mistakesArray">{{mistakesItem}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapForAdd{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px;
    }
    .userBlock{
        display: flex;
        flex-direction: column;
        gap: 10px;
        &__header{}
        &__fakeInput{
            /*background-color: tomato;*/
            /*width: 100%;*/
        }
    }
    .childsBlock{
        display: flex;
        flex-direction: column;
        gap: 10px;
        &_headerBlock{
            display: flex;
            justify-content: space-between;
            &__title{}
            &__addChildBtn{
                font-size: 1rem;
                cursor: pointer;
                background-color: inherit;
                border: 2px solid #01a6fc;
                border-radius: 999px;
                padding: 0 15px;
                display: flex;
                align-items: center;
                gap: 8px;
                &>svg{
                    fill: #01a6fc;
                    height: 1rem;
                }
                &>span{
                    color: #01a6fc;
                }
            }
        }
        &_newChild{
            display: flex;
            align-items: center;
            gap: 10px;
            &__fakeInput{
                flex-grow: 1;
                /*background-color: tomato;*/
            }
            &__removeBtn{
                font-size: 1rem;
                cursor: pointer;
                background-color: inherit;
                border: inherit;
                color: #01a6fc;
                border-radius: 999px;
                padding: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
        }
    }
    .saveBtn{
        font-size: 1rem;
        cursor: pointer;
        /*background-color: inherit;*/
        border: inherit;
        background-color: #01a6fc;
        color:  #fdfdfe;
        border-radius: 999px;
        padding: 15px;
        display: flex;
        justify-content: center;
        gap: 8px;
        width: 140px;

    }
</style>