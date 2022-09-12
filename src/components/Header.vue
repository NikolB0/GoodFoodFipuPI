<template>
<div id="app">    
    <nav class="navigation" v-if= "this.$route.name == 'profile' || this.$route.name == 'recipes' || this.$route.name == 'login' || this.$route.name == 'register' ">
        <div class="logo" grid-column="1">        
      <img class="GoodFood" src="@/assets/GoodFoodLogoS.png"  style="size: inherit;"/>
    </div>
    <div class="nav-links" >
      <!-- <router-link to="/" v-if= "$route.name === 'profile' || 'home' || 'register'"> Home </router-link>  -->      
      <router-link to="/profile" v-if= "$route.name === 'profile' || $route.name === 'recipes'"><font-awesome-icon icon="arrow-alt-circle-left" />  Profile </router-link>   
      <router-link to="/recipes" v-if= "$route.name === 'profile' || $route.name === 'recipes'">   Recipes </router-link>         
      <router-link to="/logout" v-if= "$route.name === 'profile' || $route.name === 'recipes'">  Logout</router-link> 
      <!-- stranica za logout - link se vidi samo nakon logina -->
    </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

.page-title {
    background-color: blue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c2927;
  background: #E5E5E5;
}

.logo {
    display: flex;
    align-items: left;
    justify-content: left;
}

.navigation {
    display: grid;
    grid-template-columns: 0.5fr;    
}

.nav-links {
    display: flex;
    max-height: inherit;
    grid-column: 2;
    vertical-align: bottom;
    align-content: bottom;
    justify-content: right;
    padding: 2px;
}
/* nav {
  padding: 10px;
  z-index: 100;
  align-content: right;
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e67214;
    }
  }
} */

</style>
