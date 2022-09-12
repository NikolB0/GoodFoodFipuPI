<template>
<v-container class="background">
 <div
    class="container"
    style="max-width: 350px; text-align: left; color:white; align-content: center;"
    padding="50"
  >
  <div class="form-background">
    <form @submit.prevent="handleSubmit" style="padding-top:5rem; align-content: center ; background-color: white !important; width:100% !important;">
      <div class="form-group" >
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          Invalid email or password
        </div>
      <label class="title">
        Login
      </label>
        <input
          type="email"
          v-model="userForm.email"
          id="email" 
          placeholder="E-mail"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }"
        />
        <div
          v-if="isSubmitted && $v.userForm.email.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.email.required">
            Email field is required
          </span>
        </div>
      </div>
      <br />

      <div class="form-group">
        <input
          type="password"
          v-model="userForm.password"
          id="password1"
          placeholder="Password"
          name="password1"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }"
        />
        <div
          v-if="isSubmitted && $v.userForm.password.$error"
          class="invalid-feedback"
        >
          <span v-if="!$v.userForm.password.required">
            Password field is required
          </span>
        </div>
      </div>

      <div class="buttons">
        <button type="button" class="btn_style" @click="handleSubmit()" >
          <b>Login</b>
        </button>                   
        <button type="button" class="btn_style" @click="cancel">
          <b>Cancel</b>
        </button>
      </div>
    </form>
  </div>
</div>
</v-container>
</template>

<script>
// import { firebase } from "@/firebase";
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      userForm: {
        email: "",
        password: ""
      },
      errorMessage: "",
      isSubmitted: false
    };
  },
  components: {
    
  },
  validations: {
    userForm: {
      email: {
        required,
        email
      },
      password: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    async handleSubmit() {
      let that = this;
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("login..." + this.userForm.email);
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.userForm.email, this.userForm.password)
        .then(function(result) {
          console.log("Uspješna prijava.", result);
          that.$router.replace({ name: "Regije" });
        })
        .catch(error => {
          // Handle Errors here.
          /*let errorCode = error.code;
     let errorMessage = error.message;
     if (errorCode === 'auth/wrong-password') {
     alert('Wrong password.');
    } else {
       alert(errorMessage);
}*/
          console.error(error);
          this.errorMessage = error.message;
        });
    },

    async cancel() {
        this.$router.go(-1);
      }
  }
  };

  
</script>

<style scoped>
#email,
#password1 {
  margin-bottom: 2px;
  margin-top: 2px;
  border: 2px solid #dd6824;
  background-color: transparent;
  color: #000000;
  outline: none;
  box-shadow: none;
}

.background {
  background: url('@/assets/ella-olsson-unsplash.jpg');
  background-size: cover;
  height: 100vh;
  margin: 0;
  padding: 0;
  max-width: 2000px;
}

.buttons {  
  display: flex;
  align-items: start;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0 !important;
  margin: 0;
  margin-top: 0.5rem;
  padding: 5px;
  padding-left: 70px;
  width: 30%;
  height: 200px;
  z-index: 1000;  
  grid-column-start: 1;  
  grid-column-end: 3;
  grid-row: 1;
}

.btn_style {
  grid-row: 1;
  grid-column: 2;
  background-color: #dd6824;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  text-decoration: none;
  z-index: 100;  
}

/* .btn_login {
  background-color: #f5b85c;
  border: none;
  border-radius: 15px;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  display: block;
  margin: auto;
  text-decoration: none;
} */

.form-background{
  margin-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  height: fit-content !important;
  width: fit-content !important;
  background-color: white !important;
}

.title {
  font-weight: 100;
  font-size: xx-large;
  max-width: 500px;
  text-align: center;
  padding: auto;
  margin-bottom: 15px;
  color: rgb(44, 44, 44) !important;
}
/* .form_group > label {
  font-weight: 600;
  max-width: 500px;
  text-align: center;
  color: darkslategrey !important;
} */
</style>
