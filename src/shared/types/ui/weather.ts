import z from "zod";

import {
  WeatherForecastSchema,
  CurrentWeatherSchema,
  HourlyWeatherSchema,
  DailyWeatherSchema,
} from "@/shared/schemas/weather";

export type IWeatherForecast = z.infer<typeof WeatherForecastSchema>;
export type IWeatherCurrent = z.infer<typeof CurrentWeatherSchema>;
export type IWeatherHourly = z.infer<typeof HourlyWeatherSchema>;
export type IWeatherDaily = z.infer<typeof DailyWeatherSchema>;
