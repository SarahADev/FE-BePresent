<template>
  <form class="profile">
    <h2> {{ firstName }} {{ lastName }}'s Profile</h2>
    <label>First Name</label>
    <p class="firstName">
      {{ firstName }}
    </p>

    <br />
    <label>Last Name</label>
    <p class="lastName">
      {{ lastName }}
      
    </p>
    <br />

  <!--   <label>Photo</label>
    <p><img src= {{img}} alt="image"></p> -->

    
    <label>Birthday: </label>
    <p class="birthday">
      {{ day }} {{ month }} {{ year }}
      
    </p>
    <br />

    <label>Interests:</label>
    <p>
    <ul>
      <li v-for="interest in interests" :key="interest">
        <p>{{ interest + "&nbsp;" }}</p>
      </li>
    </ul>
    </p>

   <button>Delete friend</button>
  </form>

  
</template>


<script>
import axios from "axios";

export default {
  
  data() {
    return {
      firstName: "",
      lastName: "",
 /*      img: "https://source.unsplash.com/random", */
      day: "",
      month: "",
      year: "",
    
      interests: "",
  
    };
  },
  beforeMount() {
    axios
      .get(
        `https://be-present.fly.dev/users/${this.$route.params.userId}`
      )
      .then(({ data }) => {
        this.firstName = data.user.first_name;
        this.lastName = data.user.last_name;
        this.month = data.user.birth_month;
        this.day = data.user.birth_day;
        this.year = data.user.birth_year;
        this.interests = data.user.interests;
        
      })      
      
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
  margin: 15px 0 15px;
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
  float: right;
}
</style>
