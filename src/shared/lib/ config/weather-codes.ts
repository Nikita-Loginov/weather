import { WeatherIcons } from "@/assets/icons/weather";

export interface WeatherCodeInfo {
  code: string;
  icon: React.ComponentType;
  short: string;
  description: string;
}

export const WEATHER_CODES: Record<number, WeatherCodeInfo> = {
  0: {
    code: "clear",
    icon: WeatherIcons.CloudyIcon,
    short: "Ясно",
    description: "Ясно",
  },
  1: {
    code: "clear",
    icon: WeatherIcons.CloudyIcon,
    short: "Малооблачно",
    description: "Преимущественно ясно",
  },

  2: {
    code: "cloudy",
    icon: WeatherIcons.CloudyIcon,
    short: "Облачно",
    description: "Переменная облачность",
  },
  3: {
    code: "cloudy",
    icon: WeatherIcons.CloudyIcon,
    short: "Пасмурно",
    description: "Пасмурно",
  },

  45: {
    code: "fog",
    icon: WeatherIcons.CloudyIcon,
    short: "Туман",
    description: "Туман",
  },
  48: {
    code: "fog",
    icon: WeatherIcons.CloudyIcon,
    short: "Иней",
    description: "Туман с инеем",
  },

  51: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Морось",
    description: "Легкая морось",
  },
  53: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Морось",
    description: "Умеренная морось",
  },
  55: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Морось",
    description: "Сильная морось",
  },

  61: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Дождь",
    description: "Небольшой дождь",
  },
  63: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Дождь",
    description: "Умеренный дождь",
  },
  65: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Ливень",
    description: "Сильный дождь",
  },

  71: {
    code: "snow",
    icon: WeatherIcons.CloudyIcon,
    short: "Снег",
    description: "Небольшой снег",
  },
  73: {
    code: "snow",
    icon: WeatherIcons.CloudyIcon,
    short: "Снег",
    description: "Умеренный снег",
  },
  75: {
    code: "snow",
    icon: WeatherIcons.CloudyIcon,
    short: "Снегопад",
    description: "Сильный снег",
  },

  80: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Ливень",
    description: "Небольшой ливень",
  },
  81: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Ливень",
    description: "Умеренный ливень",
  },
  82: {
    code: "rain",
    icon: WeatherIcons.CloudyIcon,
    short: "Ливень",
    description: "Сильный ливень",
  },

  85: {
    code: "snow",
    icon: WeatherIcons.CloudyIcon,
    short: "Снег",
    description: "Небольшой снегопад",
  },
  86: {
    code: "snow",
    icon: WeatherIcons.CloudyIcon,
    short: "Снегопад",
    description: "Сильный снегопад",
  },

  95: {
    code: "thunderstorm",
    icon: WeatherIcons.CloudyIcon,
    short: "Гроза",
    description: "Гроза",
  },
  96: {
    code: "thunderstorm",
    icon: WeatherIcons.CloudyIcon,
    short: "Гроза",
    description: "Гроза с градом",
  },
  99: {
    code: "thunderstorm",
    icon: WeatherIcons.CloudyIcon,
    short: "Гроза",
    description: "Сильная гроза с градом",
  },
} as const;
