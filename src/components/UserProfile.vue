<template>
  <form class="profile">
    <h2>Your Account</h2>
    <label>First Name</label>
    <p class="firstName">
      {{ firstName }}
      <button
        class="submit"
        @click="
          changeName();
          clicked1 = !clicked1;
        "
      >
        Change Name
      </button>
      <input v-if="clicked1" type="name" required v-model="firstName" />
    </p>

    <br />
    <label>Last Name</label>
    <p class="lastName">
      {{ lastName }}
      <button
        class="submit"
        @click="
          changeLastName();
          clicked2 = !clicked2;
        "
      >
        Change Last Name
      </button>
      <input v-if="clicked2" type="name" required v-model="lastName" />
    </p>
    <br />

    <label>Email:</label>
    <p class="email">
      {{ email }}
      <button class="submit" @click="changeEmail(); clicked3 = !clicked3;">Change Email</button>
      <input v-if="clicked3" type="name" required v-model="email" />
    </p>
    <br />

<label>Password</label>
    <p class="password">
      {{ password }}
      <button
        class="submit"
        @click="
          changeName();
          clicked4 = !clicked4;
        "
      >
        Change Password
      </button>
      <input v-if="clicked4" type="name" required v-model="password" />
    </p>
<br />

    <label>Birthday: </label>
    <p>{{ day }} {{ month }} {{ year }}</p>
    <br />

    <label>Interests:</label>
    <ul>
      <li v-for="interest in interests" :key="interest">
        {{ "&#x20;" + interest }}
        
      </li>
    </ul>
    <br />
    
    <label>Friends:</label>
    <p>{{ connections }}</p>
    <br />
  </form>
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
      password:"",
      interests: "",
      connections: "",
    };
  },
  beforeMount() {
    axios
      .get(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968"
      )
      .then(({ data }) => {
        this.firstName = data.user.first_name;
        this.lastName = data.user.last_name;
        this.email = data.user.email;
        this.password = data.user.password;
        this.month = data.user.birth_month;
        this.day = data.user.birth_day;
        this.year = data.user.birth_year;
        this.interests = data.user.interests;
        this.connections = data.user.connections;
      });
  },
  methods: {
    changeName() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",
        {
          first_name: this.firstName,
        }
      );
    },
    changeLastName() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",
        {
          last_name: this.lastName,
        }
      );
    },
    changeEmail() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",
        {
          email: this.email,
        }
      );
    },
 changePassword() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",
        {
          password: this.password,
        }
      );
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
  float: right;
}
</style>
