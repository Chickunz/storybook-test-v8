import { jsx } from "react/jsx-runtime";
import React from "react";
import { useForkRef, Button as Button$1 } from "@mui/material";
const Button = React.forwardRef(
  ({ primary, size, label, onClick }, ref) => {
    const buttonRef = React.useRef(null);
    const forkedRef = useForkRef(buttonRef, ref);
    return /* @__PURE__ */ jsx(Button$1, { onClick, ref: forkedRef, children: label });
  }
);
Button.displayName = "Button";
export {
  Button,
  Button as default
};
