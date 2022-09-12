<template>
  <form class="profile">
    <nav>
      <button @click="handleClickGetPresents">Get Presents!</button>
      <button @click="handleClickHome">Home</button>
      <button @click="handleClickProfile">My Profile</button>
    </nav>
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
      <button
        class="submit"
        @click="
          changeEmail();
          clicked3 = !clicked3;
        "
      >
        Change Email
      </button>
      <input v-if="clicked3" type="name" required v-model="email" />
    </p>
    <br />

    <label>Password</label>
    <p class="password">
      {{ password }}
      <button
        class="submit"
        @click="
          changePassword();
          clicked4 = !clicked4;
        "
      >
        Change Password
      </button>
      <input v-if="clicked4" type="password" v-model="password" />
    </p>
    <br />

    <label>Birthday: </label>
    <p class="birthday">
      {{ day }} {{ month }} {{ year }}
      <button
        class="submit"
        @click="
          changeBirthDay();
          clicked5 = !clicked5;
        "
      >
        Change day
      </button>
      <input v-if="clicked5" type="text" required v-model="day" />

      <button
        class="submit"
        @click="
          changeBirthMonth();
          clicked6 = !clicked6;
        "
      >
        Change month
      </button>
      <input v-if="clicked6" type="text" required v-model="month" />

      
      <button
        class="submit"
        @click="
          changeBirthYear();
          clicked7 = !clicked7;
        "
      >
        Change year
      </button>
      <input v-if="clicked7" type="text" required v-model="year" />

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

    <label>Friends:</label>
    
      <ul v-for="friends in friendsList" :key="friends">
      <li>{{friends}}</li>
      </ul>

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
      password: "",
      interests: "",
      clicked1:"",
      clicked2:"",
      clicked3:"",
      clicked4:"",
      clicked6:"",
      clicked7:"",
      friendsList: []
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
        this.email = data.user.email;
        this.password = data.user.password;
        this.month = data.user.birth_month;
        this.day = data.user.birth_day;
        this.year = data.user.birth_year;
        this.interests = data.user.interests;
        data.user.connections.map((connection) => {
          axios.get(`https://be-present.fly.dev/users/${connection}`).then(({data}) => {
            this.friendsList.push(`${data.user.first_name} ${data.user.last_name}`)
          });
        });
      })      
      
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
      ).then((res)=> {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      }) 
    },
    changeBirthDay() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",
        {
          birth_day: this.day,
        }
      );
    },
    changeBirthMonth() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",
        {
          birth_month: this.month,
        }
      );
    },
    changeBirthYear() {
      axios.patch(
        "https://be-present.fly.dev/users/d4ee78cb-854f-4034-8d7d-b020106bc968",{
birth_year:this.year
        }
      );
    },
    async handleClickHome () {
      await this.$router.push({name: `calendar`, params: {userId: this.$route.params.userId}})
    },
    async handleClickProfile () {
                await this.$router.push({name: `user-profile`, params: {userId: this.$route.params.userId}})
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
