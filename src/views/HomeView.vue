<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Spices" src="../assets/spicespooons_unsplash.png">  -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <HomepageGoodFood style="opacity: 60%;"/>

  <div class="middle">
    
    <div class="titles">      
     <h2>GoodFood</h2>
     <h4>Keep and share your best recipes</h4>
    </div>



  </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomepageGoodFood from '@/components/HomepageGoodFood.vue'
import { BCarousel } from 'bootstrap-vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    HomepageGoodFood,
    BCarousel
  }
}
</script>

<style scoped>

  @import url("https://fonts.googleapis.com/css?family=Yeseva+One:400");
  @import url("https://fonts.googleapis.com/css?family=Yantramanav:400,300");

#overlay {
  fill: antiquewhite;
}

.titles {
  align-content: center;
  margin: auto auto 10 10;
}

.h2 {
  
  position: relative;
  font-family: "Yeseva One", sans-serif;
  align-self: center;
  color: blueviolet;
  
  z-index: 1000;
}

.h4 {

  position: relative;
  font-family: "Yantramanav", sans-serif;
  align-self: right;
  
  z-index: 1000;
}

.btn {
  background-color: #f5b85c;
  border: none;
  border-radius: 8px;
  color: black;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  text-decoration: none;
}

.btn:hover {
  transform: scale(1.1);
}

</style>


