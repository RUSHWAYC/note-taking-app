import NoteForm from "../pages/NoteForm";
import { INoteProps } from "../types";

const NewNote = ({ onSubmit, onAddTag, availableTags }: INoteProps) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
