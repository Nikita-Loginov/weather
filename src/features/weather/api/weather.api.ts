import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "@/shared/api/endpoints/weather";

import { useWeatherStore } from "../model/weather-model";

export const useForecast = (lat: number, lon: number) => {
  const setWeather = useWeatherStore(state => state.setWeather);

  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => {
      const result = await weatherApi.getForecast(lat, lon);

      setWeather(result)

      return result
    },
    enabled: !!lat && !!lon
  });
};
