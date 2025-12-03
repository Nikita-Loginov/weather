import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { LINKS } from "./lib/links";

import css from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.1
      }}
      className={css["sidebar"]}
    >
      <ul className={css["sidebar__list"]}>
        {LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.link} className={css["sidebar__link"]}>
              <Link
                to={link.link}
                className={css["sidebar__item"]}
                activeProps={{
                  className: css["active"],
                }}
                activeOptions={{ exact: false, includeSearch: true }}
                role="menuitem"
                title={link.name}
                aria-label={`Перейти на страницу ${link.name.toLocaleLowerCase()}`}
              >
                <div className={css["sidebar__item-content"]}>
                  <span className={css["sidebar__item-icon"]}>
                    <Icon />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.aside>
  );
};
