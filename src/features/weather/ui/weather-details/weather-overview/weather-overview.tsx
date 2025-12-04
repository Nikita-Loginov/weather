import { Badge } from "@/shared/ui/badge/badge";

import { Icons } from "@/assets/icons";

import { useWeatherStore } from "@/features/weather/model/weather-model";

import { getWeatherInfo } from "@/shared/lib/utils/weather";

import css from "./weather-overview.module.scss";

export const WeatherOverview = () => {
  const location = useWeatherStore((state) => state.location);
  const forest = useWeatherStore((state) => state.forest);
  const daily = useWeatherStore((state) => state.daily);

  const dateTime = new Date().toLocaleString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const weatherInfo =
    forest && getWeatherInfo(forest.current_weather?.weathercode);
  const WeatherIcon = weatherInfo?.icon;

  return (
    <div className={css["weather-overview"]}>
      <header className={css["weather-overview__header"]}>
        {location.name && (
          <Badge iconLeft={<Icons.GeoIcon />} text={location.name} />
        )}
      </header>

      <div className={css["weather-overview__content"]}>
        <div className={css["weather-overview__box"]}>
          <div className={css["weather-overview__info"]}>
            <p className="h1">{weatherInfo && weatherInfo.description} </p>

            <p className="h6">{dateTime}</p>
          </div>

          <div className={css["weather-overview__info"]}>
            {daily && (
              <p className="h2">
                {daily.temperature_2m_max[0]}°C /{" "}
                <span style={{ color: "var(--gray-100-color)" }} className="h3">
                  {daily.temperature_2m_min[0]}°C
                </span>
              </p>
            )}
          </div>
        </div>

        {WeatherIcon && (
          <div className={css["weather-overview__img"]}>
            <div className={css["weather-overview__img-block"]}>
              <WeatherIcon />
            </div>
          </div>
        )}
      </div>

      <footer className={css["weather-overview__footer"]}>
        {daily && (
          <div className={css["weather-overview__info"]}>
            <p className="h5">
              Ощущается как{" "}
              {daily.apparent_temperature_min
                ? `${daily.apparent_temperature_min[0]} °C`
                : "n/n"}{" "}
              /{" "}
              {daily.apparent_temperature_max
                ? `${daily.apparent_temperature_max[0]}°C`
                : "n/n"}
            </p>
          </div>
        )}
      </footer>
    </div>
  );
};
