import { FC } from "react";
import Button from "../../atoms/Button/Button";

export type Note = {
    id: string;
    title: string;
    content: string;
}

type NoteListProps = {
    notes: Note[];
    onDelete: (id: string) => void
}


const NotesList: FC<NoteListProps> = ({ notes, onDelete }) => {

    if (notes.length === 0) {
        return <p className="text-gray-500 italic">No notes yet.</p>
    }

    return (
        <ul className="space-y-4">
            {
                notes.map(note => {
                    return <li key={note.id}
                        className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-black">{note.title}</h3>
                            <Button variant="error" onClick={() => onDelete(note.id)}>
                                Delete
                            </Button>
                        </div>
                        <p className="text-gray-700">{note.content}</p>
                    </li>
                })
            }
        </ul>
    );
}

export default NotesList;
