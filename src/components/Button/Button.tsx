import React from "react";
import { Button as MUIButton, useForkRef } from "@mui/material";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick(): void;
}

export const Button = React.forwardRef(
  ({ primary, size, label, onClick }: ButtonProps, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const forkedRef = useForkRef(buttonRef, ref);

    return (
      <MUIButton onClick={onClick} ref={forkedRef}>
        {label}
      </MUIButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
