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
            <input type="text" class="userBlock__input" placeholder="Имя" v-model="user.userName">
            <input type="text" class="userBlock__input" placeholder="Возраст" v-model="user.userAge">
        </div>
        <div class="childsBlock">
            <h2 class="childsBlock__header">Дети (макс. 5)</h2>
            <div class="childsBlock_newChild" v-for="(childItem,childIndex) in user.childs">
                <input type="text" class="childsBlock_newChild__input" placeholder="Имя" v-model="user.childs[childIndex].childName">
                <input type="text" class="childsBlock_newChild__input" placeholder="Возраст" v-model="user.childs[childIndex].childAge">
                <button class="childsBlock_newChild__removeBtn" @click="user.childs.splice(childIndex,1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"/></svg>
                    <span>Удалить</span>
                </button>
            </div>
        </div>
        <div class="controlBlock">
            <button class="controlBlock__saveBtn" @click="[addUser(user),user=deepClone(defaultUser)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"/></svg>
                <span>Сохранить</span>
            </button>
            <button class="controlBlock__addBtn" v-if="user.childs.length<5" @click="user.childs.push({})">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                <span>Добавить ребёнка</span>
            </button>
        </div>
        <transition name="demoTransition">
            <div class="mistakesList" v-if="mistakesArray[0]!==undefined">
                <p v-for="(mistakesItem,mistakesIndex) in mistakesArray">{{mistakesItem}}</p>
                <button type="button" @click="mistakesArray=[]">Понятно</button>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .wrapForAdd{
        background-color: #3c3f41;
        border-radius: 5px;
        margin: 20px;
        min-height: calc(100vh - 90px);
        //----
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
    .userBlock{
        display: flex;
        flex-direction: column;
        gap: 10px;
        &__header{}
        &__input{}
    }
    .childsBlock{
        display: flex;
        flex-direction: column;
        gap: 10px;
        &__header{}
        &_newChild{
            display: flex;
            align-items: center;
            gap: 10px;
            &__input{
                flex-grow: 1;
            }
            &__removeBtn{
                display: flex;
                align-items: center;
                gap: 10px;
                &>svg{
                    fill: aliceblue;
                    height: 1.2rem;
                }
                &>span{}
            }
        }
    }
    .controlBlock{
        display: flex;
        gap: 20px;
        /*justify-content: space-between;*/
        &__saveBtn,&__addBtn{
            display: flex;
            align-items: center;
            gap: 10px;
            &>svg{
                fill: aliceblue;
                height: 1.2rem;
            }
            &>span{}
        }
        &__saveBtn{
            flex-grow: 1;
        }
        &__addBtn{}
    }

    .mistakesList,.doneMessage{
        background-color: #3c3f41;
        position: fixed;
        top: calc(50px + 20px);
        //align-self: center;
        width: 400px;
        left: 50%;
        margin-left: -200px;
        border-radius: 15px;
        padding: 30px;
        &>button{
            width: 100%;
            border-radius: 15px;
        }
        &>*{
            margin-bottom: 10px;
        }
        &>:last-child{
            margin-bottom: 0;
        }
    }
    .mistakesList{
        border: 2px solid tomato;
        &>p{
            color: tomato;
        }
    }
</style>