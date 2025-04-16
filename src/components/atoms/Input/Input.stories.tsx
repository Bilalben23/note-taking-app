import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from "./Input";


const meta = {
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {

    render: (args) => {
        const [value, setValue] = useState<string>("");
        return (
            <Input
                {...args}
                placeholder="Type your note title..."
                name="title"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    }
}