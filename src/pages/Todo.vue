<template>
    <header>
        <ul class="navbar">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/todolist">ToDoList</router-link>
        </li>
        <li>
          Test
        </li>
      </ul>
    </header>
    <h1>TO-DO List</h1>
    <TodoList/>
  </template>
  <script>
  
  import TodoList from '../components/TodoList.vue'
  export default {
    name: 'TodoPage',
    components: {
        TodoList
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
  }
  
  .navbar{
    display: flex;
  }
  </style>
  