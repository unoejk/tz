// pinia
import {defineStore} from 'pinia'

export const useConnector = defineStore({
    id: '$Store',
    state: () => ({
        isList:false,
        usersList:[],
    }),
    actions: {
        async setPageToList(qBool_isList){
            this.isList=qBool_isList
        },
        async addUser(user){
            this.usersList.push(user)
        },
    },
    getters: {},
})