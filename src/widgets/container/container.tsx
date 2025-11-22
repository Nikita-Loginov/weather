import { rc } from "@/shared/lib/utils/rc";

import css from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={rc([css.container, className])}>{children}</div>;
};
