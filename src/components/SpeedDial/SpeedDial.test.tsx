import React from "react";
import SpeedDial from "./SpeedDial";
import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";

describe("SpeedDial Test Cases", () => {
  let getByRole: (arg0: string) => HTMLElement,
    asFragment: () => DocumentFragment;

  beforeEach(() => {
    ({ getByRole, asFragment } = render(<SpeedDial ariaLabel={"Testing"} />));
  });

  it("Should Match SpeedDial Snapshot", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
