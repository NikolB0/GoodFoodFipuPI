<template>
    <div
      class="container"
      style="max-width: 500px;text-align: left; color: white"
    >
    <h1>PROFILE</h1>
    
      <div id="myAccount">
        <label>Full name</label>
        <br />
        <br />
  
        <p class="userInfo">{{ store.displayName }}</p>
        <div class="hr"></div>
        <br />
        <br />
  
        <label>E-mail</label>
        <br />
        <br />
  
        <p class="userInfo">{{ store.currentUser }}</p>
        <div class="hr"></div>
        <br />
        <br />
  
        <label>Contact</label>
        <br />
        <br />
  
        <p class="userInfo">{{ store.contact }}</p>
        <div class="hr"></div>
        <br />
        <br />
  
        <div class="col-lg-12 col-md-12 text-center">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="logout()"
            style="max-width: 500px; 
            text-align: center; 
            background-color: #F5B85C; 
            border: none; 
            border-radius: 15px; 
            padding: 16px 32px;
            color: black"
          >
            <b>Logout</b>
          </button>
        </div>
      </div>
      <footer id="footer"></footer>
    </div>
  </template>
  
  <script>
//   import { firebase } from "@/firebase";
//   import store from "@/store";
  export default {
    data() {
      return {
        store
      };
    },
    // methods: {
    //   logout() {
    //     firebase
    //       .auth()
    //       .signOut()
    //       .then(() => {
    //         this.store.displayName = null;
    //         this.store.contact = null;
    //         this.store.currentUser = null;
    //         this.$router.push({ name: "Home" });
    //       });
    //   }
    // }
  };
  </script>
  
  <style scoped>
  .userInfo {
    color: #f5b85c;
  }
  #footer {
    width: 100%;
    height: 55px;
  }
  .hr {
    display: block;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
    color: #f5b85c;
  }
  </style>