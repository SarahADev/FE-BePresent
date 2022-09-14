<template>
  <Header/>
    <section>
    <form @submit="checkUser">
      <h2>Log In</h2>
      <label for="">Email:</label>
      <input type="email" required v-model="email" />
        <label>Password:</label>
        <input
          type="password"
          minlength="6"
          maxlength="30"
          required
          v-model="password"
        />
        <div class="center">
         <p v-if="err">That email or password is incorrect, please try again.</p>
      <button class="center">Log in</button>
      </div>
        </form>
    <p class="or">or</p>
  <div class="center">
    <button class="signup-button" @click="$router.push('signup')">Create Account</button>
    </div>
  </section>
  </template>
  <script>
    import axios from 'axios'
  import Header from './Header.vue';
    export default {
      data() {
          return {
              email: "",
              password: "",
              err: false,
              userId: "",
          };
      },
      methods: {
          async checkUser() {
              await axios.post("https://be-present.fly.dev/users/login", {
                  email: this.email,
                  password: this.password
              })
                  .then(({ data }) => {
                  this.userId = data.user_id;
                  this.$router.push({ name: `calendar`, params: { userId: this.userId } });
              })
                  .catch(() => {
                  this.err = true;
              });
          },
      },
      components: { Header }
  }
  </script>
  <style>
    form {
      max-width: 420px;
      margin: 30px auto;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
    }
    label {
      color: #ea9010;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
    }
    .signup-button {
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
    }
    button {
      background: #4e937a;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
      text-align: center;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
    }
    .center {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .error {
      color: red;
      margin-top: 10px;
      font-weight: bold;
      font-size: 0.8e;
    }
    .or {
      color: rgb(184, 184, 184);
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
    }
  </style>
