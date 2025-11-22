import { Outlet } from "@tanstack/react-router";

import { Videos } from "@/assets/videos";

import { rc } from "@/shared/lib/utils/rc";

import { Container } from "@/widgets/container/container";
import { Sidebar } from "@/shared/ui/sidebar/sidebar";

import css from "./root-layout.module.css";

export const RootLayout = () => {
  return (
    <div className={rc([css.wrapper, "wrapper"])}>
      <Container className={css.container}>
        <div className={css.layout}>
          <Sidebar />

          <div className={rc([css.page, "scroll"])}>
            <header className="header">header</header>

            <main className="main">
              <Outlet />
            </main>
          </div>
        </div>
      </Container>

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
