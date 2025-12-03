import { Icons } from "@/assets/icons";

import { rc } from "@/shared/lib/utils/rc";

import { useThemeStore } from "../../model/there-store";

import css from "./theme-toggle.module.scss";

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore((state) => state);

  return (
    <div
      className={rc([
        css["theme"],
        theme === "dark" ? css["dark"] : css["light"],
      ])}
    >
      <button
        type="button"
        className={css["theme__box"]}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        aria-label={`Переключить на ${theme === "dark" ? "светлую" : "темную"} тему`}
      >
        <span className={css["theme__btn"]}>
          <Icons.SunIcon />
        </span>

        <span className={css["theme__btn"]}>
          <Icons.MoonIcon />
        </span>

        <span className={css["theme__decor"]}></span>
      </button>
    </div>
  );
};
