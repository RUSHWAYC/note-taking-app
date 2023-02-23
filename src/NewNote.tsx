import NoteForm from "./NoteForm";
import { INoteData, ITag } from "./types";

interface INewNoteProps {
  onSubmit: (data: INoteData) => void;
  onAddTag: (tag: ITag) => void;
  availableTags: ITag[];
}

const NewNote = ({ onSubmit, onAddTag, availableTags }: INewNoteProps) => {
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
