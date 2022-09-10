<template>
  <div id="app">
    <nav>
      <router-link to="/"> <font-awesome-icon icon="fa-solid fa-house"/> </router-link> |
      <router-link to="/login">Login</router-link> |     
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/profile"><font-awesome-icon icon="arrow-alt-circle-left" />Profile</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons'
  //import FontAwesomeIcon from 'node_modules/free-solid-svg-icons'
  import faHouse from '@fortawesome/free-solid-svg-icons/faHouse'
  export default {
   components:{
     'font-awesome-icon' : FontAwesomeIcon 
   },
   computed:{
     icon(){
         return faHouse;
     }
   }
 } 
 </script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #211f1e;
  background: #E5E5E5;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
