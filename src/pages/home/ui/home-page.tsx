import { useForecast } from "@/features/weather/api/weather.api";
import { useEffect } from "react";

export const HomePage = () => {
  const { data } = useForecast(50.45, 30.52);
 
  return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores?</p>;
};
