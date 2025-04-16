import { FC, FormEvent, useState } from "react";
import type { Note } from "../../../types/types";
import { v4 as uuidv4 } from "uuid";
import NoteForm from "../../molecules/NoteForm/NoteForm";
import NotesList from "../../organisms/NotesList/NotesList";


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
