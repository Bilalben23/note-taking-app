import NoteForm from "@/components/molecules/NoteForm/NoteForm";
import NotesList from "@/components/organisms/NotesList/NotesList";
import type { Note } from "@/shared-types/note.types";
import { FC, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const NotePage: FC = () => {

    const [notes, setNotes] = useState<Note[]>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        const newNote: Note = {
            id: uuidv4(),
            title: title.trim(),
            content: content.trim()
        }

        setNotes([newNote, ...notes]);
        setTitle("");
        setContent("");
    }

    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    return (
        <div className="max-w-xl mx-auto py-8 space-y-8">
            <h1 className="text-3xl font-bold text-center">Note Taking App</h1>
            <NoteForm
                title={title}
                content={content}
                onTitleChange={(e) => setTitle(e.target.value)}
                onContentChange={(e) => setContent(e.target.value)}
                onSubmit={handleSubmit}
            />

            <NotesList
                notes={notes}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default NotePage;
