import { GREETING_TEXTS } from "./constants";

import type { ITimeOfDay } from "@/shared/types/ui/time";

export const getTimeOfDay = (date: Date = new Date()): ITimeOfDay => {
  const hours = date.getHours();

  if (hours >= 5 && hours < 12) return "morning";
  if (hours >= 12 && hours < 17) return "afternoon";
  if (hours >= 17 && hours < 22) return "evening";

  return "night";
};

export const getTextOfTime = (text: ITimeOfDay) => {
  return GREETING_TEXTS[text];
};
