<template>
  <Header/>
  <Navbar/>
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
    <label>Birthday: </label>
    <p class="birthday">
      {{ day }} / {{ month }} / {{ year }}
      
    </p>
    <br />

    <label>Interests:</label>
    <p>
    <div>
      <ul class="interests">
        <li v-for="interest in interests" :key="interest">
          <p>{{ interest.split("-").join(" ") + "&nbsp;" }}</p>
        </li>
      </ul >
    </div>
    </p>
    <div class="buttons">
    <button class="friend-profile-button" @click="getPresents()">{{`Find presents for ${firstName}!`}}</button>
    <button class="delete-button" @click="deleteFriend()">Delete friend</button>
  </div>
  </form>

  
</template>


<script>
import axios from "axios";
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";

export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            day: "",
            month: "",
            year: "",
            interests: "",
        };
    },
    beforeMount() {
        axios
            .get(`https://bepresent.fly.dev/users/${this.$route.params.friendId}`)
            .then(({ data }) => {
            this.firstName = data.user.first_name;
            this.lastName = data.user.last_name;
            this.month = data.user.birth_month;
            this.day = data.user.birth_day;
            this.year = data.user.birth_year;
            this.interests = data.user.interests;
        });
    },
    methods: {
        deleteFriend() {
            axios.delete(`https://bepresent.fly.dev/users/${this.$route.params.userId}/connections`, {
                data: {
                    connection_id: this.$route.params.friendId
                }
            }).then(() => {
                this.$router.push({ name: "user-profile", params: { userId: this.$route.params.userId } });
            });
        },
        getPresents() {
                this.$router.push({ name: `presents`, params: { userId: this.$route.params.userId }, query: {name: this.firstName, categories: this.interests} });
                },
    },
    components: { Header, Navbar }
};
</script>

<style scoped>
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
button.delete-button {
  background: #ea9010;
  border: 0;
  padding: 10px 20px;
  margin:20px;
  color: white;
  border-radius: 20px;
  float: right;
}
button.friend-profile-button {
  background: #4e937a;
  border: 0;
  padding: 10px 20px;
  margin:20px;
  color: white;
  border-radius: 20px;
  float: right;
}
.buttons {
  display:grid;
  justify-content: center;
  align-items:flex-end;
}
</style>
