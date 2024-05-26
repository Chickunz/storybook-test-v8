"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const material = require("@mui/material");
const Button = React.forwardRef(
  ({ primary, size, label, onClick }, ref) => {
    const buttonRef = React.useRef(null);
    const forkedRef = material.useForkRef(buttonRef, ref);
    return /* @__PURE__ */ jsxRuntime.jsx(material.Button, { onClick, ref: forkedRef, children: label });
  }
);
Button.displayName = "Button";
exports.Button = Button;
exports.default = Button;
