import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { Trash2 } from "lucide-react";

const meta = {
    component: Button,
    argTypes: {
        onClick: { action: "clicked" }
    }
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Primary",
        variant: "primary"
    }
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary"
    }
};

export const Error: Story = {
    args: {
        children: "Error",
        variant: "error"
    }
};

export const Submit: Story = {
    args: {
        children: "Submit",
        type: "submit"
    }
};

export const Reset: Story = {
    args: {
        children: "Reset",
        type: "reset"
    }
};


export const WithIcon: Story = {
    args: {
        children: <>
            <Trash2 />
            Delete
        </>,
        variant: "primary"
    }
}