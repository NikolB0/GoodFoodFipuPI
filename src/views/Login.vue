<template>
 <div
    class="container"
    style="max-width: 350px; text-align: left; color:white; align-content: center;"
    padding="50"
  >
    <form @submit.prevent="handleSubmit" style="padding-top:5rem; align-content: center;">
      <div class="form-group" >
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          Invalid email or password
        </div>
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
      <br />
      <br />

      <div class="form_group">
        <button type="button" @click="handleSubmit()" class="btn_login">
          <b>Login</b>
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </form>
  </div>
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
    }
  }
};
</script>

<style scoped>
#email,
#password1 {
  margin-bottom: 8px;
  margin-top: 10px;
  border: 2px solid #f5b85c;
  background-color: transparent;
  color: #d0d0d0;
  outline: none;
  box-shadow: none;
}
.btn_login {
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
}
.form_group > label {
  font-weight: 600;
  max-width: 500px;
  text-align: center;
}
</style>
