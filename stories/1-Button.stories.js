import React from "react"
import { action } from "@storybook/addon-actions"
import Button from "../src/components/button"

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: {
      text: `
        description or documentation about my component, supports markdown
        ~~~js
        import Button from "components/button";

        <Button onClick={() => console.log("click")}>Click Here</Button>
        ~~~
      `,
    },
  },
}

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
)
