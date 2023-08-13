// pinia
import {defineStore} from 'pinia'

export const useConnector = defineStore({
    id: '$Store',
    state: () => ({
        isList:false,
        usersList:[],
        mistakesArray:[],
    }),
    actions: {
        async setPageToList(qBool_isList){
            this.isList=qBool_isList
        },
        async tryAddUser(user){
            this.mistakesArray=[]
            await this.validateNewUser(user)
            if (this.mistakesArray[0]===undefined){
                this.usersList.push(user)
            }
        },
        async validateNewUser(user){
            if (user.userName===undefined || user.userName===''){
                this.mistakesArray.push('Нужно указать ваше имя')
            }
            if (user.userAge===undefined || user.userAge===''){
                this.mistakesArray.push('Нужно указать ваш возраст')
            }
            user.childs.forEach((childItem,childIndex)=>{
                if (childItem.childName===undefined || childItem.childName===''){
                    this.mistakesArray.push(`Нужно указать имя ${childIndex+1} ребёнка`)
                }
                if (childItem.childAge===undefined || childItem.childAge===''){
                    this.mistakesArray.push(`Нужно указать возраст ${childIndex+1} ребёнка`)
                }
            })
        },
    },
    getters: {},
})