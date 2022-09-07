<template>
  <form @submit="handleSubmit">
    <h2>Login</h2>
    <label for="">Email:</label>
    <input type="email" required v-model="email" />

       <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <button class="submit" @click="handleClick">Submit</button>

 
  </form>
  <!-- <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {
      this.passwordError = this.password.length > 5 ? 
      '' : 'Password must be at least 6 chars long'
    },
    },
  }

</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: #f6f7f8;
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

button {
  background: #4e937a;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}


.error {
    color: red;
    margin-top: 10px;
    font-weight: bold;
    font-size: 0.8e;
}
</style>
