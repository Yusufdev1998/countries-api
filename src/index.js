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

app.get("/countries", getCountries);
app.get("/countries/slug/:slug", getCountryBySlug);
app.use(express.json());

app.listen(8080, () => {
  console.log("server is run...");
});
