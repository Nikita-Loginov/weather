import { useMemo } from "react";

import { getBackgroundVideo } from "../../lib/background-videos";

import css from "./dynamic-background.module.scss";
import { getTimeOfDay } from "@/shared/lib/time/time-of-day";

export const DynamicBackground = () => {
  const videoSrc = useMemo(() => {
    const timeOfDay = getTimeOfDay(new Date());

    return getBackgroundVideo(timeOfDay);
  }, []);

  return (
    <div className={css["bg"]}>
      <video
        src={videoSrc}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        crossOrigin="anonymous"
        className={css["bg__video"]}
      ></video>
    </div>
  );
};
