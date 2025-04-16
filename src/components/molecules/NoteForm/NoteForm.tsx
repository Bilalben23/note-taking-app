import { ChangeEvent, FC, FormEvent } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

type NoteFormProps = {
    title: string;
    content: string;
    onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onContentChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
}

const NoteForm: FC<NoteFormProps> = ({
    title,
    content,
    onTitleChange,
    onContentChange,
    onSubmit
}) => {
    return (
        <form className="space-y-4 p-4 border rounded-lg shadow-sm bg-white" onSubmit={onSubmit}>
            <Input
                value={title}
                onChange={onTitleChange}
                placeholder="Type your note title..."
                name="title"
            />
            <Input
                value={content}
                onChange={onContentChange}
                placeholder="Type your note content..."
                name="content"
            />
            <div className="flex justify-end">
                <Button type="submit">
                    Add Note
                </Button>
            </div>
        </form>
    );
}

export default NoteForm;
