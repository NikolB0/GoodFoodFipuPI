<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Spices" src="../assets/spicespooons_unsplash.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HomepageGoodFood from '@/components/HomepageGoodFood.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    HomepageGoodFood
  }
}
</script>


