import type { Meta, StoryObj } from "@storybook/react";
import NoteForm from "./NoteForm";
import { FormEvent, useState } from "react";

const meta = {
    component: NoteForm
} satisfies Meta<typeof NoteForm>;
export default meta;

type Story = StoryObj<typeof NoteForm>;

export const Default: Story = {
    render: () => {
        const [title, setTitle] = useState<string>("");
        const [content, setContent] = useState<string>("");

        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            alert(`Note created\nTitle: ${title}\nContent: ${content}`);
        }

        return <NoteForm
            title={title}
            content={content}
            onTitleChange={(e) => setTitle(e.target.value)}
            onContentChange={(e) => setContent(e.target.value)}
            onSubmit={handleSubmit}
        />
    }
}