import { WeatherForecastSchema } from "@/shared/schemas/weather";
import { httpClient } from "../config/http-client";

export const weatherApi = {
  getForecast: async (lat: number, lon: number) => {
    try {
      const response = await httpClient.get(
        `forecast?` +
          `latitude=${lat}&longitude=${lon}` +
          
          `&current=` +
          `temperature_2m,` +
          `relative_humidity_2m,` +
          `apparent_temperature,` +
          `precipitation,` +
          `weather_code,` +
          `cloud_cover,` +
          `wind_speed_10m,` +
          `wind_direction_10m,` +
          `visibility,` +
          `is_day,` +
          `uv_index,` +
          `pressure_msl` +
          
          `&hourly=` +
          `temperature_2m,` +
          `relative_humidity_2m,` +
          `apparent_temperature,` +
          `precipitation,` +
          `weather_code,` +
          `cloud_cover,` +
          `wind_speed_10m,` +
          `wind_direction_10m,` +
          `visibility,` +
          `is_day,` +
          `uv_index,` +
          `pressure_msl` +
          
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

      return WeatherForecastSchema.parse(response.data);
    } catch (error) {
      console.error(`Ошибка при получения погоды для региона: ${error}`);
      throw Error(`Ошибка при получения погоды для региона: ${error}`);
    }
  },
};