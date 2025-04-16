import type { Meta, StoryObj } from "@storybook/react";
import NotePage from "./NotePage";
import NotesList from "@/components/organisms/NotesList/NotesList";

const meta = {
    component: NotePage
} satisfies Meta<typeof NotesList>;
export default meta;

type Story = StoryObj<typeof NotePage>;

export const Default: Story = {};

