import mongoose, { Schema } from "mongoose";

const countrySchema = new Schema({
  name: {
    common: {
      type: String,
      required: true,
    },
    nativeName: String,
    slug: {
      type: String,
      required: true,
    },
  },
  cca3: String,
  cioc: String,
  currencies: [String],
  capital: [String],
  region: String,
  subregion: String,
  languages: [String],
  borders: [
    {
      common: String,
      slug: String,
    },
  ],
  area: String,
  population: Number,
  continents: [String],
  flags: {
    png: String,
    svg: String,
    alt: String,
  },
});

const CountryModel = mongoose.model("country", countrySchema);

export default CountryModel;
