import { httpClient } from "../config/http-client";
import { API_KEY } from "../config/api";

export const weatherApi = {
  getForecast: async (lat: number, lon: number) => {
    try {
      const response = await httpClient.get(
        `forecast?` +
          `latitude=${lat}&longitude=${lon}` +

          `&current_weather=true` +

          `&hourly=` +
          `temperature_2m,` + 
          `relative_humidity_2m,` + 
          `apparent_temperature,` + 
          `precipitation,` + 
          `weather_code,` +
          `cloud_cover,` + 
          `wind_speed_10m,` +
          `is_day` +
     
          `&daily=` +
          `weather_code,` +
          `temperature_2m_max,` + 
          `temperature_2m_min,` +
          `apparent_temperature_max,` +
          `apparent_temperature_min,` + 
          `sunrise,` +
          `sunset,` + 
          `precipitation_sum,` +
          `wind_speed_10m_max` + 
          `&timezone=auto&forecast_days=7`
      );

      return response.data;
    } catch (error) {
      throw Error(`Ошибка при получения погоды для региона: ${error}`);
    }
  },
};
