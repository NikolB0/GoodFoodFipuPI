<template>
    <div
      class="container"
      style="max-width: auto; text-align: center; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:black"
    >
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            The email address is already in use by another account.
          </div>
          <!-- <label for="name">
            Full name
            <span class="text-danger ml-1">*</span>
          </label> -->
          <input
            type="text"
            v-model="userForm.name"
            id="name"
            name="name"
            placeholder="Full Name"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.name.required"
            class="invalid-feedback"
          >
            Name field is required.
          </div>
        </div>
        <br />
  
        <div class="form-group">
          <!-- <label for="contact">
            Contact
            <span class="text-danger ml-1">*</span>
          </label> -->
          <input
            type="username"
            v-model="userForm.username"
            id="username"
            placeholder="Username"
            name="username"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.username.$error }"
          />
          <div
            v-if="isSubmitted && $v.userForm.username.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userForm.username.required">
              Username field is required.
            </span>
            <span v-if="!$v.userForm.username.minLength">
              Username field is required.
            </span>
          </div>
        </div>
        <br/>
  
        <div class="form-group">
          <!-- <label for="email">
            Email
            <span class="text-danger ml-1">*</span>
          </label> -->
          <input
            type="email"
            v-model="userForm.email"
            id="email"
            placeholder="email@email.com"
            name="email"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }"
          />
          <div
            v-if="isSubmitted && $v.userForm.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userForm.email.required">
              Email field is required.
            </span>
            <span v-if="!$v.userForm.email.email">
              Please provide valid e-mail address.
            </span>
          </div>
        </div>
        <br />
  
        <div class="form-group">
          <!-- <label for="password">
            Password
            <span class="text-danger ml-1">*</span>
          </label> -->
          <input
            type="password"
            v-model="userForm.password"
            id="password"
            placeholder="Password"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }"
          />
          <div
            v-if="isSubmitted && $v.userForm.password.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userForm.password.required">
              Password field is required.
            </span>
            <span v-if="!$v.userForm.password.minLength">
              Password should be at least 5 characters long.
            </span>
          </div>
        </div>
        <br />
  
        <div class="form-group">
          <!-- <label for="confirmPassword">
            Repeat password
            <span class="text-danger ml-1">*</span>
          </label> -->
          <input
            type="password"
            v-model="userForm.confirmPassword"
            id="confirmPassword"
            placeholder="Retype password"
            name="confirmPassword"
            class="form-control"
            :class="{
              'is-invalid': isSubmitted && $v.userForm.confirmPassword.$error
            }"
          />
          <div
            v-if="isSubmitted && $v.userForm.confirmPassword.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userForm.confirmPassword.required">
              Confirm Password field is required.
            </span>
            <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword">
              Passwords should be matched.
            </span>
          </div>
        </div>
        <br />
  
        <div class="form-group form-check">
          <input
            type="checkbox"
            v-model="userForm.accept"
            @change="$v.userForm.accept.$touch()"
            id="accept"
            class="form-check-input"
          />
          <label
            class="form-check-label"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.accept.$error }"
            for="accept"
          >
            Accept terms and conditions
          </label>
  
          <div
            v-if="isSubmitted && $v.userForm.accept.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userForm.accept.required">
              Accept terms and conditions!
            </span>
          </div>
        </div>
        <br />
  
        <div class="form_group">
        <v-row>
            
            <button type="button" class="btn_style" @click="handleSubmit()">
            <b>Register</b>
            </button>            
            <button type="button" class="btn_style" @click="cancel">
            <b>Cancel</b>
            </button>
            
        </v-row>          
        </div>
      </form>
      <footer id="footer"></footer>
    </div>
  </template>
  
  <script>
//   import { firebase } from "@/firebase";
  import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
//   import { db } from "@/firebase";
//   import store from "@/store";
  export default {
    name: "Registracija",
    data() {
      return {
        userForm: {
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          accept: ""
        },
        isSubmitted: false,
        errorMessage: ""
      };
    },
    validations: {
      userForm: {
        name: {
          required
        },
        username: {
          required,
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(5)
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs("password")
        },
        accept: {
          required(val) {
            return val;
          }
        }
      }
    },
    methods: {
      async handleSubmit() {
        let that = this;
        that.isSubmitted = true;
        that.$v.$touch();
        if (that.$v.$invalid) {
          return;
        }
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            that.userForm.email,
            that.userForm.password
          )
          .then(function() {
            const id = that.userForm.email;
            db.collection("users")
              .doc(id)
              .set({
                name: that.userForm.name,
                username: that.userForm.username,
                email: that.userForm.email,
                password: that.userForm.password
              })
            store.displayName = that.userForm.name;
            store.username = that.userForm.username;
            store.currentUser = that.userForm.email;
            store.password = that.userForm.password;
            that.$router.replace({ name: "Regije" });
          })
          .catch(error => {
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
  #name,
  #username,
  #email,
  #password,
  #confirmPassword {
    /* margin-bottom: 8px;
    margin-top: 10px; */
    border: 3px solid #f5b85c;
    background-color: whitesmoke;
    height: 30px;
    width: 220px;
    border-radius: 4px;
    color: #171717;
    outline: none;
    box-shadow: none;
  }
  #footer {
    width: 100%;
    height: 100px;
  }
  .btn_style{
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

  .btn_style:hover {
    transform: scale(1.1);
  }
  
  .form_group > label {
    max-width: 500px;
    text-align: center;
    font-weight: 600;
  }
  
  </style>