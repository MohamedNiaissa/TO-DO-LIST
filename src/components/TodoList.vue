<template>        
  <input v-model = "listeName" type="text" class = "input_new_list"/>      
  <button @click ="addList" class = "btn btn-info">Créer une nouvelle liste</button>
  <TodoListItem v-for="(task,index) in tasks" :task = "task" :key = "index" @add-a-task = "addTask(task.todos,$event)" @task-done = "taskFinished(task.todos,$event)" @delete-a-list="deleteList(tasks,index)"></TodoListItem>
</template>

<script>

import TodoListItem from './TodoListItem.vue';
import useFirstStore from '../store/firstStore'
import { mapState } from 'pinia'
import { mapActions } from 'pinia'

export default {
    name: "TodoList",
    components: { TodoListItem },
    data(){
      return {
        tasks : [ {name : "example",todos : [{item : "Do this", status : "In progress"},{item : "Do ", status : "Done"}]}],
        listeName : "",
        nbr : 0,
        data : ""
      }
    },
    props: {
        msg: String
    },
    methods: {
      addList(){
        this.tasks.push({name : this.listeName,todos : []})
        this.listeName = "";
      },
      addTask(task,taskTodo){
        let l = task.length
        task[l] = {item : taskTodo, status : "In progress"};
      },
      taskFinished(task,index){
        if(task[index].status == "In progress"){
          task[index].status = "Done";
        }else{
          task[index].status = "In progress";
        }
      },
      deleteList(tasks,index){
        tasks.splice(index,1);
      },
      ...mapActions(useFirstStore, ["actionTest"] )
    },
    computed: {
      ...mapState(useFirstStore, ["actionTest"] )
    },
    mounted() {
      this.actionTest()
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{  
  width: 100%;

  height: 20%;
}
.sous-container{
  background-color: aliceblue;
  width: 30%;
}
</style>
