import { useForecast } from "@/features/weather/api/weather.api";

import { Card } from "@/shared/ui/card/card";
import { WeatherOverview } from "../weather-details/weather-overview/weather-overview";
import { WeatherAdd } from "../weather-details/weather-add/weather-add";

import { useWeatherStore } from "../../model/weather-model";

import css from "./weather-dashboard.module.scss";

export const WeatherDashboard = () => {
  const location = useWeatherStore((state) => state.location);

  useForecast(location?.lat, location?.lon);

  return (
    <div className={css["weather-dashboard"]}>
      <Card>
        <WeatherOverview />
      </Card>

      <Card>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quos.
        </p>
      </Card>

      <Card>
        <WeatherAdd />
      </Card>

      <Card>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quos.
        </p>
      </Card>
    </div>
  );
};
