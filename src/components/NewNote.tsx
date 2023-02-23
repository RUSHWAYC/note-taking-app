import { NoteData, Tag } from "../App";
import NoteForm from "../pages/NoteForm";
import { v4 as uuidv4 } from "uuid";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  const handleNewNoteSubmit = (data: NoteData) => {
    const newNote = { ...data, id: uuidv4() };
    onSubmit(newNote);
  };

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        id={"Idk what this does but the app breaks if id is not here."}
        onSubmit={handleNewNoteSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
