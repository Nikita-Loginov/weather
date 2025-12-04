import { rc } from "@/shared/lib/utils/rc";

import css from "./card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={rc([css["card"], className])}>{children}</div>;
};
