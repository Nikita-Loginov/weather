import { WEATHER_CODES } from "../ config/weather-codes";

export const getWeatherDescription = (code: number) => {
  return WEATHER_CODES[code].description || WEATHER_CODES[0].description;
};

export const getWeatherInfo = (code: number) => {
  return WEATHER_CODES[code] || WEATHER_CODES[0];
};
