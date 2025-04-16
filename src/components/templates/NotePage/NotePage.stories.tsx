import type { Meta, StoryObj } from "@storybook/react";
import NotesList from "../../organisms/NotesList/NotesList";
import NotePage from "./NotePage";

const meta = {
    component: NotePage
} satisfies Meta<typeof NotesList>;
export default meta;

type Story = StoryObj<typeof NotePage>;

export const Default: Story = {};

