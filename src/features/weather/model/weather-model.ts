import { create } from "zustand";
import { persist } from "zustand/middleware";

import type {
  IWeatherCurrent,
  IWeatherDaily,
  IWeatherForecast,
} from "@/shared/types/ui/weather";
import type { ILocation } from "@/shared/types/ui/location";

interface WeatherStore {
  forest: IWeatherForecast | null;
  current: IWeatherCurrent | null;
  daily: IWeatherDaily | null;
  location: ILocation;

  setWeather: (weather: IWeatherForecast) => void;
  setLocation: (location: ILocation) => void;
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      forest: null,
      current: null,
      daily: null,
      location: { lat: 55.4375, lon: 37.5, name: "Москва" },

      setWeather: (weather) => {
        set({
          forest: weather,
          current: weather.current,
          daily: weather.daily,
        });
      },

      setLocation: (location) => {
        set({ location });
      },
    }),
    {
      name: "location",

      partialize: (state) => ({
        location: state.location,
      }),
    }
  )
);
