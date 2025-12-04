import { WeatherDashboard } from "@/features/weather/ui/weather-dashboard/weather-dashboard";

import css from "./home-page.module.scss";

export const HomePage = () => {
  return (
    <section className={css["section"]}>
      <WeatherDashboard />
    </section>
  );
};
