import { useForecast } from "@/features/weather/api/weather.api";

export const HomePage = () => {
  useForecast(50.45, 30.52);
 
  return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores?</p>;
};
