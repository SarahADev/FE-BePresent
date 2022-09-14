<template>
  <Header/>
  <Navbar/>
  <div class="profile">
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
        Edit
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
        Edit
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
        Edit
      </button>
      <input v-if="clicked3" type="name" required v-model="email" />
    </p>
    <br />

    <label>Password</label>
    <p class="password">
      ********
      <button 
        @click="
          changePassword();
          clicked4 = !clicked4;
        "
        >
        Edit
      </button>
      <input v-if="clicked4" 
      type="password"
      v-model="password" />
      <p v-if="success">Password changed successfully!</p>
    </p>
    <br />
    <div class="edit-birthday">
    <label>Birthday: </label>
    <p class="birthday">
      {{ day }} / {{ month }} / {{ year }}
      <button
        class="submit"
        id="birthday-button"
        @click="
          changeDOB();
          clicked5 = !clicked5;
          clicked6 = !clicked6;
          clicked7 = !clicked7;
        "
      >
        Edit
      </button>
      <span>
      <input v-if="clicked5" type="text" placeholder="DD" required v-model="day" />
      <input v-if="clicked6" type="text" required v-model="month" />
      <input v-if="clicked7" type="text" required v-model="year" />
    </span>

    </p>
  </div>
    <br />

  <label>Interests:</label>
    <div>
      <ul class="interests">
        <li v-for="interest in interests" :key="interest">
          <p>{{ interest.split("-").join(" ") + "&nbsp;" }}</p>
        </li>
      </ul >
      <button
        class="submit"
        @click="
          changeInterests();
          clicked8 = !clicked8;
          clicked9 = !clicked9;
          clicked10 = !clicked10;
          clicked11 = !clicked11;
          clicked12 = !clicked12;
          clicked13 = !clicked13;
        "
      >
        Edit
      </button>
      <div class="interest-list" v-if="clicked13">
        <ul class="interests">
          <li>
          <input
            v-if="clicked8"
            type="checkbox"
            value="art-and-collectibles"
            v-model="interests"
          />
          <label>Art & Collectibles</label>
          </li>
          <li>
          <input
            v-if="clicked9"
            type="checkbox"
            value="jewelry-and-accessories"
            v-model="interests"
          />
          <label>Jewelry & Accessories</label>
          </li>
          <li>
          <input
            v-if="clicked10"
            type="checkbox"
            value="home-and-living"
            v-model="interests"
          />
          <label>Home & Living</label>
          </li>
          <li>
          <input
            v-if="clicked11"
            type="checkbox"
            value="clothing-and-shoes"
            v-model="interests"
          />
          <label>Clothing & Shoes</label>
          </li>
          <li>
          <input
            v-if="clicked12"
            type="checkbox"
            value="toys-and-entertainment"
            v-model="interests"
          />
          <label>Toys & Entertainment</label>
          </li>
        </ul>
      </div>
    </div>


    <div class="edit-friends">
    <label class="friends">Friends:</label>
    
      <div  v-for="(friends, index) in friendsList" :key="friends">
      <p @click="renderFriend(index)">{{friends}}</p>
      </div>
    </div>
    <br />
    <div class="add-friend">
    <AddFriend/>
  </div>
    </div>
</template>


<script>
import axios from "axios";
import AddFriend from "./AddFriend.vue";
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
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
            clicked1: "",
            clicked2: "",
            clicked3: "",
            clicked4: "",
            clicked5: "",
            clicked6: "",
            clicked7: "",
            clicked8: "",
            clicked9: "",
            clicked10: "",
            clicked11: "",
            clicked12: "",
            clicked13: "",
            friendsList: [],
            friendId: [],
            success: false,
        };
    },
    beforeMount() {
        axios
            .get(`https://be-present.fly.dev/users/${this.$route.params.userId}`)
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
                axios.get(`https://be-present.fly.dev/users/${connection}`).then(({ data }) => {
                    this.friendsList.push(`${data.user.first_name} ${data.user.last_name}`);
                    this.friendId.push(connection);
                });
            });
        });
    },
    methods: {

        changeDOB() {
          this.changeBirthDay()
          this.changeBirthMonth()
          this.changeBirthYear()
        },
        changeName() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                first_name: this.firstName,
            });
        },
        changeLastName() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                last_name: this.lastName,
            });
        },
        changeEmail() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                email: this.email,
            });
        },
        changePassword() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                password: this.password,
            }).then(() => {
              this.success = true
            })
            .catch(() => {})
        },
        changeBirthDay() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                birth_day: this.day,
            });
        },
        changeBirthMonth() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                birth_month: this.month,
            });
        },
        changeBirthYear() {
            axios.patch(`https://be-present.fly.dev/users/${this.$route.params.userId}`, {
                birth_year: this.year
            });
        },
        changeInterests() {
      axios.patch(
        `https://be-present.fly.dev/users/${this.$route.params.userId}`,
        {
          interests: this.interests,
        }
      );
    },
        renderFriend(index) {
            let clickedFriend = this.friendId[index];
            this.$router.push({ name: "friend-profile", params: { userId: this.$route.params.userId, friendId: clickedFriend } });
        },
        handleClickHome() {
            this.$router.push({ name: `calendar`, params: { userId: this.$route.params.userId } });
        },
        handleClickProfile() {
            this.$router.push({ name: `user-profile`, params: { userId: this.$route.params.userId } });
        },
    },
    components: { AddFriend, Navbar, Header }
};
</script>

<style>

.profile {
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
  padding: 2px 2px;
  margin-top: 0;
  color: white;
  border-radius: 20px;
  float: right;
}

label.friends {
  margin: 0;
}

ul {
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
}
ul.interests {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 22px;
}

#birthday-button {
  flex-direction: column;
}

.add-friend {
  margin-top: 40px;
  margin-bottom: 40px;
}
.edit-friend {
  margin-top: 0px;
}

</style>
