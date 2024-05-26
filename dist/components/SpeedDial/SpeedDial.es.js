import { jsx } from "react/jsx-runtime";
import React from "react";
import { SpeedDial as SpeedDial$1 } from "@mui/material";
const SpeedDial = React.forwardRef(
  ({ direction = "up", ariaLabel }, ref) => {
    return /* @__PURE__ */ jsx(SpeedDial$1, { direction, ariaLabel, ref });
  }
);
SpeedDial.displayName = "SpeedDial";
export {
  SpeedDial,
  SpeedDial as default
};
