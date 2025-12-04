import { useEffect, useRef } from "react";
import { useDebounceFn } from "ahooks";
import { motion } from "framer-motion";

import { Input } from "../input/input";
import { ThemeToggle } from "@/features/theme/ui/theme-toggle/theme-toggle";
import { GreetingText } from "@/features/greeting/ui/greeting-text/greeting-text";

import { setVarRoot } from "@/shared/lib/utils/set-var-root";

import { Icons } from "@/assets/icons";

import css from "./header.module.scss";

export const Header = () => {
  const header = useRef<null | HTMLHeadingElement>(null);

  const setRootHeightHeader = () => {
    if (header.current) {
      setVarRoot(header.current, "height", "header-height");
    }
  };

  const { run: debouncedSetHeight } = useDebounceFn(setRootHeightHeader, {
    wait: 100,
  });

  useEffect(() => {
    setRootHeightHeader();

    window.addEventListener("resize", debouncedSetHeight);

    return () => {
      window.removeEventListener("resize", debouncedSetHeight);
    };
  }, [debouncedSetHeight]);

  return (
    <motion.header
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.1
      }}
      className={css["header"]}
      ref={header}
    >
      <div className={css["header__info"]}>
        <p className="h5">Привет, друг!</p>

        <GreetingText />
      </div>

      <div className={css["header__details"]}>
        <Input
          placeholder="Search your location"
          iconLeft={<Icons.SearchIcon style={{ stroke: "red" }} />}
        />

        <ThemeToggle />
      </div>
    </motion.header>
  );
};
