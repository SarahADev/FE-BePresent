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
  <ul v-for="(item, index) in itemList" :key="index">
    <li>{{ item }}</li>
  </ul>
</template>

<script>
const axios = require("axios");
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
      this.webScraper();
    },
    webScraper() {
      let self = this;
      console.log("in WS");
      const cheerio = require("cheerio");
      const categories = this.interests;
      categories.map((category) => {
        console.log("in map", category);
        let url = `https://api.scraperapi.com?api_key=ff689ac484f512bf24e0ab3723745de9&url=https://www.etsy.com/uk/c/${category}`;
        let newItemList = [];
        axios(url)
          .then(function (response) {
            console.log(response, "in then block");
            let html = response.data;
            let $ = cheerio.load(html);
            $("a.listing-link").each(function () {
              console.log("in each func");
              const itemName = $(this)
                .find("div.v2-listing-card__info")
                .find("h2")
                .text()
                .trim();
              const itemLink = $(this).attr("href");
              const itemImage = $(this).find("img.wt-width-full").attr();
              const itemPrice = $(this).find("span.currency-value").text();
              newItemList.push({
                itemName,
                itemLink,
                itemImage: itemImage["data-src"],
                itemPrice,
                category,
              });
            });
            console.log(newItemList, "item list");
            self.itemList = newItemList;
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