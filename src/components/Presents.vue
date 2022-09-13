<template>
  <form @submit="handleGenerate">
    <label>Interests:</label>
    <div class="interest-list" required>
      <ul>
        <input
          type="checkbox"
          value="art-and-collectibles"
          v-model="interests"
        />
        <label>Art & Collectibles</label>
        <input
          type="checkbox"
          value="jewelry-and-accessories"
          v-model="interests"
        />
        <label>Jewelry & Accessories</label>
        <input type="checkbox" value="home-and-living" v-model="interests" />
        <label>Home & Living</label>
        <input type="checkbox" value="clothing-and-shoes" v-model="interests" />
        <label>Clothing & Shoes</label>
        <input
          type="checkbox"
          value="toys-and-entertainment"
          v-model="interests"
        />
        <label>Toys & Entertainment</label>
      </ul>
      <!-- 'jewelry-and-accessories', 'clothing-and-shoes', 'home-and-living', 'wedding-and-party', 'toys-and-entertainment', 'art-and-collectibles' -->
    </div>
    <button class="submit">Generate Gift Ideas</button>
  </form>
  <p>{{ interests }}</p>
  <p>{{ itemList }}</p>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      interests: [],
      itemList: [],
    };
  },
  methods: {
    handleGenerate() {
      console.log("Handling the generator...");
      console.log(this.interests, "interests");
      this.webScraper();
    },
    webScraper() {
      console.log("in the webscraper");
      const cheerio = require("cheerio");
      const axios = require("axios");
      const categories = this.interests;
      categories.map((category) => {
        console.log(
          category,
          "category in map",
          `https://www.etsy.com/uk/c/${category}`
        );
        const url = `https://www.etsy.com/uk/c/${category}`;
        axios(url)
          .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            this.itemList = [];
            $("a.listing-link", html).each(function () {
              const itemName = $(this)
                .find("div.v2-listing-card__info")
                .find("h2")
                .text()
                .trim();
              const itemLink = $(this).attr("href");
              const itemImage = $(this).find("img.wt-width-full").attr();
              const itemPrice = $(this).find("span.currency-value").text();
              itemList.push({
                itemName,
                itemLink,
                itemImage: itemImage["data-src"],
                itemPrice,
                category,
              });
              console.log(itemList, "item list");
            });
          })
          .catch((err) => {
            console.log(err, "error");
          });
      });
    },
  },
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
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
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
</style>