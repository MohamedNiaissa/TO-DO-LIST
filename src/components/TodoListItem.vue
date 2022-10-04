<template>
  <section style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
          <div class="card rounded-3">
            <div class="card-body p-4">

              <div class="col-12 btn-delete-list">
                <button type="submit" class="btn btn-danger" @click="deleteList()">Delete List</button> 
              </div>

              <h4 class="text-center my-3 pb-3">{{task.name}}</h4>

              <form @submit.prevent class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                <div class="col-12">
                  <div class="form-outline">
                    <label class="form-label" for="form1">Enter a task here</label>
                    <input v-model = "taskToDo" type="text" id="form1" class="form-control" />
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary" @click="addaTask()">Save</button> 
                </div>
              </form>

              <table class="table mb-4">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Todo item</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                <tr v-for="(taskList,index) in task.todos" :key = "index">
                  <th scope="row">{{index + 1}}</th>
                  <td>{{taskList.item}}</td>
                  <td>{{taskList.status}}</td>
                  <td>
                  <button @click = "deleteTask(index,task.todos)" type="submit" class="btn btn-danger">Delete</button>
                  <button @click = "taskDone(index)" type="submit" class="btn btn-success ms-1">Finished</button>
                  </td>
              </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


    export default {
    name: 'TodoListItem',
    data(){
        return {
            taskToDo : ""
        }

    }, 
    props : {
        tasks : {
            type : Array,
            required : true
        },
        task : {
          type : Object,
          required : true
        }
    },
    methods : {
        deleteTask(index,tasks){
            tasks.splice(index,1);
        },
        addaTask(){
          this.$emit("add-a-task", this.taskToDo);
          this.taskToDo = "";
        },
        addToCart(){
            this.$emit("add-to-cart")
        },taskDone(index){
          this.$emit('task-done',index)
        },
        deleteList(){
          this.$emit("delete-a-list")
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-delete-list{
  text-align: end;
}
</style>
