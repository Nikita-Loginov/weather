import { Outlet } from "@tanstack/react-router";


import { Videos } from "@/assets/videos";

import { rc } from "@/shared/lib/utils/rc";

import { Header } from "@/shared/ui/header/header";
import { Sidebar } from "@/shared/ui/sidebar/sidebar";

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

      <div className={css.bg}>
        <video
          src={Videos.Bg}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          crossOrigin="anonymous"
          className={css.video}
        ></video>
      </div>
    </div>
  );
};
