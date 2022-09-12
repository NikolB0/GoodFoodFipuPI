<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Spices" src="../assets/spicespooons_unsplash.png">  -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  
  <div class="middle">
    <HomepageGoodFood/>
  </div>
  
  <!-- <div class="titles">      
          <h2 class="front-title">GoodFood</h2>
          <h4 class="front-subtitle">Keep and share your best recipes</h4>
          </div> -->

 

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

/* .middle {
  position: relative;
} */

.titles {
  /* align-self: center;
  margin: 10 10 10 10;
  align-content: center;
  margin: auto auto 10 10; */
    position: auto;
    align-self: center;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     margin: auto;
     width: 500px;
     height: 300px;

}

.front-title {
  
  font-size: 100px;
  font-family: "Yeseva";
  font-weight: bold;
  align-self: center;
  color: darkslategray;
  
}

.front-subtitle {  
  font-family: "Yantramanav", sans-serif;
  align-self: right;
  margin: -10;
  
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
  z-index: 1000;
}

.btn:hover {
  transform: scale(1.1);
}

</style>


