import { useMemo } from "react";
import { getTimeOfDay, getTextOfTime } from "@/shared/lib/time/time-of-day";

export const GreetingText = () => {
  const greeting = useMemo(() => {
    return getTextOfTime(getTimeOfDay(new Date()));
  }, []);

  return <p className="h3">{greeting}</p>;
};
