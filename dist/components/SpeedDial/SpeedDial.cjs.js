"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const material = require("@mui/material");
const SpeedDial = React.forwardRef(
  ({ direction = "up", ariaLabel }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(material.SpeedDial, { direction, ariaLabel, ref });
  }
);
SpeedDial.displayName = "SpeedDial";
exports.SpeedDial = SpeedDial;
exports.default = SpeedDial;
