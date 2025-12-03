import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "@/shared/api/endpoints/weather";

export const useForecast = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => weatherApi.getForecast(lat, lon),
    enabled: !!lat && !!lon
  });
};
