import React from "react";
import Button from "./Button";
import { describe, it, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";

describe("Button Test Cases", () => {
  let getByRole: (arg0: string) => HTMLElement,
    asFragment: () => DocumentFragment;

  beforeEach(() => {
    ({ getByRole, asFragment } = render(
      <Button label={"Testing"} onClick={() => console.log("Hey")} />
    ));
  });

  it("Should Match Button Snapshot", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
