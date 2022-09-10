 <template>
  <div class="carousel" style="display: flex; position: relative">
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
      
      <b-carousel-slide
        v-for="item in carouselItems"
        :key= "item.id"
        :img-src= "item.image"
      ></b-carousel-slide>

      </b-carousel>  
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
          image: require("@/assets/spicespooons_unsplash.png"),
          
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
  <!-- <style >

</style> -->