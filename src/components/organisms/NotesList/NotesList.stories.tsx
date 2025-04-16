import type { Meta, StoryObj } from "@storybook/react";
import NotesList from "./NotesList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import type { Note } from "../../../types/types";

const meta = {
    component: NotesList
} satisfies Meta<typeof NotesList>;
export default meta;

type Story = StoryObj<typeof NotesList>;

export const WithNotes: Story = {
    render: () => {
        const [notes, setNotes] = useState<Note[]>([
            { id: uuidv4(), title: "First Note", content: "This is the first note." },
            { id: uuidv4(), title: "Second Note", content: "This is the second note." },
        ])

        const handleDelete = (id: string) => {
            setNotes(notes.filter(note => note.id !== id))
        }

        return <NotesList
            notes={notes}
            onDelete={handleDelete}
        />
    }
}

export const Empty: Story = {
    render: () => {
        return <NotesList
            notes={[]}
            onDelete={() => { }}
        />
    }
}