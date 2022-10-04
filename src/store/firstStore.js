import { defineStore } from "pinia"

const useFirstStore = defineStore('first',{
    state: () => ({
        todos: ["hey test"],
        coins: []
    }),
    actions: {
        actionTest(){
            console.log(this.todos)
            console.log(this.coins)
        }
    }
}) 

export default useFirstStore;