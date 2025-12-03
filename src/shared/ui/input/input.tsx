import React from "react";

import { rc } from "@/shared/lib/utils/rc";

import css from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ iconLeft, className, error, ...rest }, ref) => {
    return (
      <label className={rc([css["input-box"], className])}>
        <div className={css["input-box__block"]}>
          {iconLeft ? (
            <span className={css["input-box__icon"]}>{iconLeft}</span>
          ) : null}

          <input ref={ref} {...rest} className={css.input} />
        </div>

        {error && <p className="p1">{error}</p>}
      </label>
    );
  }
);

Input.displayName = "Input";
