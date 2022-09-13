 <template>
  
  <div class="wrapper" >
  <div class="carousel" >
    <div style="width: 100%">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      fade
      indicators
      background="#"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      >      
      <!-- <b-carousel-slide img-src="src/assets/spicespooons_unsplash.png"></b-carousel-slide>
      <b-carousel-slide img-src="src/assets/goodsoup_unsplash.jpg"></b-carousel-slide> 
      <b-carousel-slide img-src="src/assets/goodsoup_unsplash.jpg"></b-carousel-slide> -->
      
      <div class="carousel-style" >
      <b-carousel-slide
        v-for="item in carouselItems"
        :key= "item.id"
        :img-src= "item.image"
      >         
        <!-- <div class="titles">   
            <h2 class="front-title">GoodFood</h2>
            <h4 class="front-subtitle">Keep and share your best recipes</h4> 
          </div>            -->
      </b-carousel-slide>
      
     </div>
      </b-carousel>  


    </div>
    
  </div>
  
    <div class="title-wrapper">
      <div class="titles2">   
            <h2 class="front-title">GoodFood</h2>
            <h4 class="front-subtitle">Keep and share your best recipes</h4> 
      </div>  
      <div class="buttons">         
      <button type="button" class="btn_style" @click="$router.push('/register')">
        <b>Register</b>
      </button>            
      <button type="button" class="btn_style" @click="$router.push('/login')">
        <b>Login</b>
      </button>              
    </div>
    </div>  

    

</div>

</template>
  
<script type="application/javascript">
  

export default {
  name: "HomepageGoodFood",
  props: {
    msg: String,
  },

  data() {
    return {
      carouselItems: [
        {
          id: 1,
          image: require("@/assets/goodsoup_unsplash.jpg"),
        },
        {
          id: 2,
          image: require("@/assets/spicespooons_unsplash.jpg"),
          
        },
        {
          id: 3,
          image: require("@/assets/pancakies_unsplash.jpg"),
        }
      ],
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script> 

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>


.wrapper {
  display: grid;  
  position: relative;
  align-items: center;
}

.carousel {  
  display: flex; 
  position: relative; 
  align-items: center;
  grid-column-start: 1;  
  grid-column-end: 3;
  grid-row: 1;
  z-index: 1;
}

.carousel-style {
  height: 100vh;  
  position: relative;
  align-items: stretch;
  opacity: 60%;
}

.carousel-caption {
  vertical-align: middle !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0 !important;
  margin-top: 5rem;
  width: 100%;
  height: 200px;
  
  background-color: rgba(255, 255, 255, 0.7)  
}

.title-wrapper {
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0 !important;
  
  width: 100%;
  height: 200px;
  z-index: 1000;  
  grid-column-start: 1;  
  grid-column-end: 3;
  grid-row: 1;
  background-color: rgba(255, 255, 255, 0.7)  
}

.titles2 {
  /* align-self: center;
  margin: 10 10 10 10;
  align-content: center;
  margin: auto auto 10 10; */
    opacity: 100% !important;
    position: auto;
    align-self: center;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     margin-top: 1rem;
     width: 100%;
     height: auto;

}

.front-title {
  opacity: 100%;
  font-size: 120px;
  font-family: "Yeseva";
  font-weight: bold;
  align-self: center;
  color: #dd6824;
  margin-top: 1rem;  
  padding: 0;
  line-height: 0.9;
  
}

.front-subtitle {    
  font-size: 30px;
  font-family: "Yantramanav", sans-serif;
  align-self: right;  
  color: rgb(18, 19, 19) !important;
  margin-left: 8rem;
  padding: 0;
  line-height: 0.7;
  
}

.buttons {  
  grid-row: 2; 
  margin-top: 2rem;
}

.btn_style {
  grid-row: 1;
  grid-column: 2;
  background-color: #dd6824;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px 5px;
  width: 180px;
  text-align: center;
  font-size: 16px;
  margin: 5px 10px 5px 10px;
  text-decoration: none;
  z-index: 100;  
}

v-row {
  width: 100%;
  grid-row: 1;
  grid-column: 2;
}

.btn_style:hover {
  transform: scale(1.1);
}

</style> 