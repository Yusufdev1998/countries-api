import mongoose from "mongoose";
import express from "express";
import {
  getCountries,
  getCountryBySlug,
} from "./controller/country.controller.js";
try {
  await mongoose.connect(
    "mongodb+srv://yusufdev:Ku23jo2coYilwxHU@fn4.hpxn4kx.mongodb.net/countries?retryWrites=true&w=majority"
  );
  console.log("db connected");
} catch (error) {
  console.log(error);
}
const app = express();

// app.get("/dump-data", dumpData);
app.get("/", (req, res)=> {
  res.send(`
    <style>
      @import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;800&display=swap);

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Open Sans", sans-serif;
        background: #f0f0f0;
      }

      .container {
        width: 100%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 40px;
        padding-right: 40px;
      }

      .list {
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;
      }
      .item {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px 20px 20px;
        background: #fff;
        border-radius: 10px;
      }
      .item-title {
        font-size: 28px;
      }
      .item-desc {
        font-size: 18px;
      }
      .link-wrapper {
        padding: 10px;
        background: #929292;
        border-radius: 10px;
      }
      .item-link {
        text-decoration: none;
        color: #fff;
      }
      .item-link:hover {
        color: rgb(102, 0, 255);
      }
    </style>


    <div class="container">
      <ul class="list">
        <li class="item">
          <h2 class="item-title">All</h2>
          <p class="item-desc">Ma'lumotni to'liq olish</p>

          <div class="link-wrapper">
            <a
              class="item-link"
              href="https://countries-api-v7sn.onrender.com/countries?limit=250"
              target="_blank"
              >https://countries-api-v7sn.onrender.com/countries?limit=250</a
            >
          </div>
        </li>
        <li class="item">
          <h2 class="item-title">By Name(Slug)</h2>
          <p class="item-desc">Bitta davlatni ma'lumotini olish</p>

          <div class="link-wrapper">
            <a
              class="item-link"
              href="https://countries-api-v7sn.onrender.com/countries/slug/uzbekistan"
              target="_blank"
              >https://countries-api-v7sn.onrender.com/countries/slug/${country-name}</a
            >
          </div>
        </li>
        <li class="item">
          <h2 class="item-title">Search</h2>
          <p class="item-desc">Davlatni nomi bo'yicha</p>

          <div class="link-wrapper">
            <a
              class="item-link"
              href="https://countries-api-v7sn.onrender.com/countries?search=uzbek"
              target="_blank"
              >https://countries-api-v7sn.onrender.com/countries?search=${text}</a
            >
          </div>
        </li>
        <li class="item">
          <h2 class="item-title">By Region</h2>
          <p class="item-desc">Region bo'yicha ma'lumotni olish</p>

          <div class="link-wrapper">
            <a
              class="item-link"
              href="https://countries-api-v7sn.onrender.com/countries?region=Africa"
              target="_blank"
              >https://countries-api-v7sn.onrender.com/countries?region=${Region-name}</a
            >
          </div>
        </li>
      </ul>
    </div>
`)
})

app.get("/countries", getCountries);
app.get("/countries/slug/:slug", getCountryBySlug);
app.use(express.json());

app.listen(8080, () => {
  console.log("server is run...");
});
