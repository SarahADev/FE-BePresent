<template>
  <Header />
  <Navbar />
  <form @submit="handleProducts">
    <p v-if="this.$route.query.name">
      {{ this.$route.query.name + " " + "likes:" }}
    </p>
    <ul v-for="categories in this.$route.query.categories" :key="categories">
      <li>{{ categories }}</li>
    </ul>
    <br />
    <label for="budget" placeholder="10">Budget:</label>
    <input type="number" required v-model="budget" />
    <label>Interests:</label>
    <div class="interest-list" required>
      <ul class="interests">
        <li>
          <input
            type="checkbox"
            value="art-and-collectibles"
            checked
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
        <p v-if="interests.length < 1">Please select at least one option</p>
      </ul>
    </div>
    <div class="center">
      <button :disabled="interests.length < 1 ? '' : disabled" class="submit">
        Generate Gift Ideas
      </button>
    </div>
  </form>
  <div class="loading" v-if="loading"></div>
  <p v-if="error" class="error">
    Oops! Something went wrong. Please try again...
  </p>

  <ul>
    <li>
      <button v-if="fullItemList" v-on:click="randomise" class="reroll">
        Show me more
      </button>
    </li>
    <li class="item-container" v-for="(item, index) in itemList" :key="index">
      <img :src="item.itemImage" class="item-img" />
      <h3>
        <a :href="item.itemLink" target="_blank" class="item-name">{{
          item.itemName
        }}</a>
      </h3>
      <p class="item-price">£{{ item.itemPrice }}</p>
    </li>
    <li>
      <button v-if="fullItemList" v-on:click="randomise" class="reroll">
        Show me more
      </button>
    </li>
  </ul>
  <p>Powered By Etsy</p>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
const axios = require("axios");
export default {
  data() {
    return {
      budget: null,
      interests: [],
      itemList: [],
      loading: false,
      error: false,
      fullItemList: null,
    };
  },
  methods: {
    handleProducts() {
      console.log("handling get req");
      this.error = false;
      this.loading = true
      console.log(this.interests,' categories')
      axios
        .post("https://bepresent.fly.dev/users/products", {
          categories: this.interests
        })
        .then((response) => {
          this.fullItemList = response.data
          this.randomise()
        })
        .catch((err) => {
          this.error = true;
          console.log(err);
        });
    },
    randomise() {
      if (this.fullItemList) {
        const randomArr = [];
        while (randomArr.length < 9) {
          const budgetItem =
            this.fullItemList[
              Math.floor(Math.random() * this.fullItemList.length)
            ];
          if (this.budget < 0 || this.budget === null) {
            randomArr.push(budgetItem);
          } else if (budgetItem.itemPrice <= this.budget) {
            randomArr.push(budgetItem);
          }
        }
        this.itemList = randomArr;
        this.loading = false;
      } else {
        console.log("cannot reload without generating results");
      }
    },
  },
  components: { Header, Navbar },
};
</script>

<style scoped>
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
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  top: 2px;
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
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.item-container {
  max-width: 420px;
  height: 420px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #f6f7f8;
  border-radius: 10px;
}

.item-img {
  align-self: center;
  width: 300px;
  border-radius: 5px;
  margin: 10px 10px 20px 10px;
}

.item-price {
  font-size: 1rem;
}

.item-name {
  font-size: 1rem;
}
ul.interests {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.loading {
  border: 16px solid #f6f7f8;
  border-top: 16px solid #4e937a;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  margin: 5px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.reroll {
  font-size: 1em;
}
</style>
