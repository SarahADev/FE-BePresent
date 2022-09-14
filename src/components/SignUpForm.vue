<template>
  <section>
    <Header/>
    <form @submit="handleSubmit">
      <h2>Create Account</h2>

      <label for="">First Name</label>
      <input type="name" required v-model="firstName" />

      <label for="">Last Name</label>
      <input type="name" required v-model="lastName" />

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
      <label for="">Date of Birth:</label>
      <div class="dob">
        <input type="text" minlength="2" maxlength="2" v-model="day" />
        <p>/</p>
        <input type="text" minlength="2" maxlength="2" v-model="month" />
        <p>/</p>
        <input type="text" minlength="4" maxlength="4" v-model="year" />
      </div>
      <p class="date-eg">format: day/month/year</p>
      <p class="date-eg">example: 01/01/1990</p>

      <label>Interests:</label>
      <div class="interest-list" required>
        <ul class="interests">
          <li>
            <input
            type="checkbox"
            value="art-and-collectibles"
            v-model="interests"
            />
            <label>Art & Collectibles</label>
          </li>
          <li>
          <input
            type="checkbox"
            value="jewelry-and-accessories"
            v-model="interests"
          />
          <label>Jewelry & Accessories</label>
          </li>
          <li>
          <input type="checkbox" value="home-and-living" v-model="interests" />
          <label>Home & Living</label>
          </li>
          <li>
          <input
            type="checkbox"
            value="clothing-and-shoes"
            v-model="interests"
          />
          <label>Clothing & Shoes</label>
          </li>
          <li>
          <input
            type="checkbox"
            value="toys-and-entertainment"
            v-model="interests"
          />
          <label>Toys & Entertainment</label>
          </li>
        </ul>
      </div>
      <br />
      <div class="center">
        <button>Create Account</button>
      </div>
    </form>

    <p class="or">or</p>
    <div class="center">
      <button @click="$router.push('/')">Already have an account?</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Header from './Header.vue'
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      day: "",
      month: "",
      year: "",
      reminders: true,
      terms: false,
      interests: [],
    };
  },
  methods: {
    async addUser() {
      await axios
        .post("https://be-present.fly.dev/users", {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          birth_day: this.day,
          birth_month: this.month,
          birth_year: this.year,
          password: this.password,
          interests: this.interests,
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSubmit() {
      this.addUser();
      this.$router.push("/");
    },
  },
  components: {Header}
};
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
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ef767a;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
label.terms {
  color: #555;
}
button {
  background: #4e937a;
  border: 0;
  padding: 10px 20px;
  margin-top: 0;
  color: white;
  border-radius: 20px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.error {
  color: red;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.dob {
  display: flex;
  align-content: center;
}
.date-eg,
.or {
  color: rgb(184, 184, 184);
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}
ul.interests {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 22px;
}
</style>
