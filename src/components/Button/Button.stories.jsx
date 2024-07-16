import Button from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;

export const Primary = {
  args: {
    children: "Button",
  },
};