<template>
  <form class="profile">
    <h2>Your Account</h2>
    <label>First Name</label>
    <p>{{ firstName }}</p>
    <br />
    <label>Last Name</label>
    <p>{{ lastName }}</p>
    <br />
    <label>Email:</label>
    <p>{{ email }}</p>
    <br />
    <label>Birthday: </label>
    <p>{{ day }} {{ month }} {{ year }}</p>
    <br />
    <label>Interests:</label>
    <p>{{ interests }}</p>
    <br />
    <label>Friends:</label>
    <p>{{ connections }}</p>
    <br />
  </form>
  <button class="submit" @click="fetchUser()">Check User</button>
  <button class="submit" @click="changeUser()">Change profile</button>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      day: "",
      month: "",
      year: "",
      interests: "",
      connections: "", 
    }; 
  },
  methods: {
    fetchUser() {
       
      axios
        .get(
          "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968"
        )
        .then(({ data }) => {
          this.firstName = data.user.first_name;
          this.lastName = data.user.last_name;
          this.email = data.user.email;
          this.month = data.user.birth_month;
          this.day = data.user.birth_day;
          this.year = data.user.birth_year;
          this.interests = data.user.interests;
          this.connections = data.user.connections;
        });
        
    },
  },
};
</script>

<style>
profile {
  max-width: 420px;
  margin: 30px auto;
  background: #f6f7f8;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
span {
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
</style>
