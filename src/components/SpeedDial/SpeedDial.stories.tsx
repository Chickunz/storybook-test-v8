import SpeedDial from "./SpeedDial";

export default {
  title: "Components/SpeedDial",
  component: SpeedDial
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Up = {
  args: {
    ariaLabel: "Hai"
  }
};

export const Right = {
  args: {
    direction: "right",
    ariaLabel: "Hai but right"
  }
};
