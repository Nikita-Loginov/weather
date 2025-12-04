import { useWeatherStore } from "@/features/weather/model/weather-model";

import { rc } from "@/shared/lib/utils/rc";

import { WEATHER_METRICS } from "./constants";

import type { IWeatherCurrent, IWeatherDaily } from "@/shared/types/ui/weather";

import css from "./weather-add.module.module.scss";

export const WeatherAdd = () => {
  const current = useWeatherStore((state) => state.current);
  const daily = useWeatherStore((state) => state.daily);

  if (!current) return null;

  return (
    <div className={css["weather-add"]}>
      <header className={css["weather-add__header"]}>
        <p className="h3">О погоде</p>
      </header>

      <div className={css["weather-add__items"]}>
        {WEATHER_METRICS.map((metric) => {
          let value: number | string | undefined;

          if (metric.typeData === "current") {
            value = current[metric.key as keyof IWeatherCurrent] as
              | number
              | undefined;
          } else if (metric.typeData === "daily" && daily) {
            const dailyValues = daily[metric.key as keyof IWeatherDaily];

            if (Array.isArray(dailyValues) && dailyValues.length > 0) {
              value = dailyValues[0];
            } else if (!Array.isArray(dailyValues)) {
              value = dailyValues;
            }
          }

          const formattedValue = metric.formatter
            ? metric.formatter(value as number | undefined)
            : value?.toString() || "0";

          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className={rc([
                css["weather-add__item"],
                metric.variant === "big" ? css["big"] : "",
              ])}
            >
              <header className={css["weather-add__item-header"]}>
                <span className={css["icon"]}>{<Icon />}</span>

                <p className={rc([metric.variant === 'small' ? "h6" : 'h4'])}>{metric.title}</p>
              </header>

              <div className={css["weather-add__item-content"]}>
                <p className="h3">
                  {formattedValue}

                  {metric.unit && <span className="p1"> {metric.unit}</span>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
