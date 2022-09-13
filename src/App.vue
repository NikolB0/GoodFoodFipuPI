<template>
  <div id="app">
    <!-- <nav >
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |     
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/profile"><font-awesome-icon icon="arrow-alt-circle-left" />Profile</router-link>
    </nav> -->
    <Header />
    <!-- <router-view/> -->
  </div>
</template>

<script>  
  import Header from '@/components/Header.vue';
  import FontAwesomeIcon from '@fortawesome/free-solid-svg-icons';
  import faHouse from '@fortawesome/free-solid-svg-icons/faHouse';
  
  export default {
   components:{
     //'font-awesome-icon' : FontAwesomeIcon,
      Header
   },
   computed:{
     icon(){
         return faHouse;
     }
   }
 } 
 </script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Yeseva+One");
  @import url("https://fonts.googleapis.com/css?family=Yantramanav");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #211f1e;
  background: #E5E5E5;
}

.navigation
{  
  background-color: transparentize($color: #ffffff, $amount: 0.7);
  align-content: right;
}

nav {
  padding: 10px;
  z-index: 100;
  a {
    font-weight: lighter;
    color: #2c3e50;
    text-decoration: none;
    padding: 4px;
    align-self: end;

    &.router-link-exact-active {
      color: #dd602e;
    }
  }
}
</style>
