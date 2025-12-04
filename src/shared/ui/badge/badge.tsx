import css from "./badge.module.scss";

interface BadgeProps {
  iconLeft?: React.ReactNode;
  text?: string;
}

export const Badge: React.FC<BadgeProps> = ({ iconLeft, text }) => {
  if (!iconLeft && !text) return null;

  return (
    <div className={css["badge"]}>
      {iconLeft && <span className={css["badge__icon"]}>{iconLeft}</span>}

      {text && <p className="h5">{text}</p>}
    </div>
  );
};
