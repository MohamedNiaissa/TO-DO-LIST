<template>
 <div>
    <router-view></router-view>
 </div>

 <footer>
      <p>Created by Mohamed Niaissa</p>
    </footer>
</template>
<script>

export default {
  name: 'App',
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
  margin-top: 60px;
}

.navbar{
  display: flex;
}
</style>
