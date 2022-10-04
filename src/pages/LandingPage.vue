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

    <h4>Bienvenue dans l'application</h4>
    <h5>Gérer vos différentes taches</h5>
    <div class="random_img">
        <img src="https://picsum.photos/200" >
        <img src="https://picsum.photos/400" >
        <img src="https://picsum.photos/600" >
    </div>
  </template>
  <script>

  
  export default {
    name: 'TodoPage',
    components: {

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

  .random_img{
    display: flex;
    justify-content: center;
  }

  .random_img > img{
    margin: 20px;
    height: 440px;
  }
  </style>
  