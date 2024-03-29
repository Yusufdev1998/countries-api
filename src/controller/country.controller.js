import CountryModel from "../models/country.mode.js";

export const getCountries = async (req, res) => {
  try {
    const { search, region } = req.query;
    const skip = +req.query.skip || 0;
    const limit = +req.query.limit || 20;

    let query = {};
    if (search) {
      query["name.common"] = { $regex: `^${search}`, $options: "i" };
    }

    if (region) {
      query["region"] = region;
    }
    const count = await CountryModel.count(query);

    const countries = await CountryModel.find(query, {}, { limit, skip });
    res.json({
      data: countries,
      total: count,
      limit,
      skip,
    });
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

export const getCountryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const country = await CountryModel.findOne({
      "name.slug": slug,
    });
    res.json(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
