<template>
    <!-- <div class="home">
      <Recipe/> -->
      <div class="container mx-auto mt-4">
   <div class="row">
    <div class="col-md-4">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/pancakies_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
    </div>    
       <div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="@/assets/goodsoup_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn  mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
    </div>    
          <div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="@/assets/spicespooons_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
  </div>
    
  <div class="col-md-4">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/pancakies_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
    </div>    
       <div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="@/assets/goodsoup_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn  mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
    </div>    
          <div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="@/assets/spicespooons_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
  </div>
    
  <div class="col-md-4">
      <div class="card" style="width: 18rem;">
  <img src="@/assets/pancakies_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
    </div>    
       <div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="@/assets/goodsoup_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn  mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
    </div>    
          <div class="col-md-4">
<div class="card" style="width: 18rem;">
  <img src="@/assets/spicespooons_unsplash.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Open</a>
  </div>
  </div>
  </div>
    
    
</div>
</div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Recipe from '@/components/Recipe.vue'
  
  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      Recipe
    }
  }
  </script>

  <<style scoped>
:root {
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}

body {
  background: #111 !important;
}

.card {
  background: rgb(36, 36, 36);
  border: 1px solid #dd6824;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

.btn {
  border: 5px solid;
  border-color: #dd6824;
  border-image-slice: 1;
  background: var(--gradient) !important;
  /* -webkit-background-clip: text !important; */
  -webkit-text-fill-color: #dd6824 !important;
  border-image-source:  var(--gradient) !important; 
  text-decoration: none;
  transition: all .4s ease;
}

.btn:hover, .btn:focus {
      background: var(--gradient) !important;
  /* -webkit-background-clip: none !important; */
  -webkit-text-fill-color: #fff !important;
  border: 5px solid #fff !important; 
  box-shadow: #222 1px 0 10px;
  text-decoration: none;
}
  .v-card-text {
  height: 200px;
  overflow-y: auto;
}
  </style>