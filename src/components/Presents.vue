<template>
  <form @submit="handleGenerate">
    <label for="budget" placeholder="10">Budget:</label>
    <input type="number" required v-model="budget" />
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
    <div class="center">
      <button class="submit">Generate Gift Ideas</button>
    </div>
  </form>
  <div class="loading" v-if="loading"></div>
  <ul>
    <li class="item-container" v-for="(item, index) in itemList" :key="index">
      <img :src="item.itemImage" class="item-img" />
      <h3>
        <a :href="item.itemLink" target="_blank" class="item-name">{{
          item.itemName
        }}</a>
      </h3>
      <p class="item-price">£{{ item.itemPrice }}</p>
    </li>
  </ul>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      budget: null,
      interests: [],
      itemList: [],
      loading : false
    };
  },
  methods: {
    handleGenerate() {
      let self = this;
      self.loading = true
      const cheerio = require("cheerio");
      const categories = this.interests;
      let fullItemList = [];
      let count = 0;
      categories.map((category) => {
        let url = `https://api.scraperapi.com?api_key=ff689ac484f512bf24e0ab3723745de9&url=https://www.etsy.com/uk/c/${category}`;
        let newItemList = [];
        axios(url)
          .then(function (response) {
            count++;
            let html = response.data;
            let $ = cheerio.load(html);
            $("a.listing-link").each(function () {
              const itemName = $(this)
                .find("div.v2-listing-card__info")
                .find("h2")
                .text()
                .trim();
              const itemLink = $(this).attr("href");
              const itemImage = $(this).find("img.wt-width-full").attr();
              const itemPrice = $(this)
                .find("p.wt-text-title-01.lc-price")
                .find("span.currency-value")
                .text();
              newItemList.push({
                itemName,
                itemLink,
                itemImage: itemImage["data-src"],
                itemPrice,
                category,
              });
            });
            fullItemList.push(newItemList.slice(16));
            fullItemList = fullItemList.flat();
            const randomArr = [];
            while (randomArr.length < 9) {
              const budgetItem =
                fullItemList[Math.floor(Math.random() * fullItemList.length)];
              if (self.budget < 0 || self.budget === null) {
                randomArr.push(budgetItem);
              } else if (budgetItem.itemPrice <= self.budget) {
                randomArr.push(budgetItem);
              }
            }
            if (count === categories.length) {
              self.loading = false
              self.itemList = randomArr;
            }
          })
          .catch((err) => {
            console.log(err, "error");
          });
      });
    },
  },
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
  font-size: 1em;
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
