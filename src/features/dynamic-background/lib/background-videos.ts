import { Videos } from "@/assets/videos";

import type { IBackground } from "@/shared/types/ui/background";

// todo Дописать чтобы еще и зависило от погоды видео

export const BACKGROUND_VIDEOS: IBackground = {
  morning: Videos.MorningVideo,
  afternoon: Videos.AfternoongVideo,
  evening: Videos.EveningVideo,
  night: Videos.NightVideo,
};

export const getBackgroundVideo = (value: keyof IBackground) => {
  return BACKGROUND_VIDEOS[value];
};
