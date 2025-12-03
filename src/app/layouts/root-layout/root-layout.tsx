import { Outlet } from "@tanstack/react-router";

import { rc } from "@/shared/lib/utils/rc";

import { Header } from "@/shared/ui/header/header";
import { Sidebar } from "@/shared/ui/sidebar/sidebar";
import { DynamicBackground } from "@/features/dynamic-background/ui/dynamic-background/dynamic-background";

import css from "./root-layout.module.scss";

export const RootLayout = () => {
  return (
    <div className={rc([css.wrapper, "wrapper"])}>
      <div className={css.layout}>
        <Sidebar />

        <div className={rc([css.page, "scroll"])}>
          <Header />

          <main className={rc(['main', 'main-top'])}>
            <Outlet />
          </main>
        </div>
      </div>

     <DynamicBackground />
    </div>
  );
};
