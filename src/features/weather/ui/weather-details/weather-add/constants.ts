import { Icons } from "@/assets/icons";
import { WeatherIcons } from "@/assets/icons/weather";

import type { IWeatherCurrent, IWeatherDaily } from "@/shared/types/ui/weather";

interface WeatherMetric {
  title: string;
  typeData: "current" | "daily";
  key: keyof IWeatherCurrent | keyof IWeatherDaily;
  unit: string;
  icon: React.ComponentType;
  formatter?: (value: number | undefined) => string;
  variant?: "small" | "big";
}

export const WEATHER_METRICS: WeatherMetric[] = [
  {
    title: "Скорость ветра",
    key: "wind_speed_10m",
    unit: "km/h",
    icon: Icons.WindIcon,
    formatter: (val) => val?.toFixed(1) || "0",
    variant: "small",
    typeData: "current",
  },
  {
    title: "Влажность",
    key: "relative_humidity_2m",
    unit: "%",
    icon: Icons.HumidityIcon,
    formatter: (val) => Math.round(val || 0).toString() || "0",
    variant: "small",
    typeData: "current",
  },
  {
    title: "Видимость",
    key: "visibility",
    unit: "m",
    icon: Icons.VisibilityIcon,
    formatter: (val) => val?.toFixed(1) || "0",
    variant: "small",
    typeData: "current",
  },
  {
    title: "Давление",
    key: "pressure_msl",
    unit: "гПа",
    icon: Icons.BloodIcon,
    formatter: (val) => Math.round(val || 0).toString() || "0",
    variant: "small",
    typeData: "current",
  },
  {
    title: "UV индекс",
    key: "uv_index",
    unit: "UV",
    icon: Icons.UVIndexIcon,
    formatter: (val) => val?.toFixed(1) || "0",
    variant: "small",
    typeData: "current",
  },
  {
    title: "Облачность",
    key: "cloud_cover",
    unit: "%",
    icon: Icons.CloudyIcon,
    formatter: (val) => Math.round(val || 0).toString() || "0",
    variant: "small",
    typeData: "current",
  },
  {
    title: "Рассвет",
    key: "sunrise",
    unit: "",
    icon: WeatherIcons.SunriseIcon,
    variant: "big",
    typeData: "daily",
    formatter: (val) => {
      if (typeof val === "string") {
        return new Date(val).toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      if (typeof val === "number") {
        return new Date(val * 1000).toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      return "n/n";
    },
  },
  {
    title: "Закат",
    key: "sunset",
    unit: "",
    icon: WeatherIcons.SunsetIcon,
    variant: "big",
    typeData: "daily",
    formatter: (val) => {
      if (typeof val === "string") {
        return new Date(val).toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      if (typeof val === "number") {
        return new Date(val * 1000).toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      return "n/n";
    },
  },
];
