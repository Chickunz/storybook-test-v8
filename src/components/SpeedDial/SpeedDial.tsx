import React from "react";
import { SpeedDial as MUISpeedDial } from "@mui/material";

export interface SpeedDialProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Which way is the icon facing
   */
  direction?: "down" | "left" | "right" | "up";
  /**
   * Arialabel for the component
   */
  ariaLabel: string;
}

export const SpeedDial = React.forwardRef(
  ({ direction = "up", ariaLabel }: SpeedDialProps, ref) => {
    return (
      <MUISpeedDial direction={direction} ariaLabel={ariaLabel} ref={ref} />
    );
  }
);

SpeedDial.displayName = "SpeedDial";

export default SpeedDial;
