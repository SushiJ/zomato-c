import joi from "joi";

export const validateRestaurantByCity = (resCity) => {
  const Schema = joi.object({
    city: joi.string().required(),
  });
  return Schema.validateAsync(resCity);
};

export const validateRestaurantWhenSearched = (searchString) => {
  const Schema = joi.object({
    search: joi.string().required(),
  });
  return Schema.validateAsync(searchString);
};
