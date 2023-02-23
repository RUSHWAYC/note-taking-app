import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./NewNote";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { INote, INoteData, IRawNote, ITag } from "./types";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [notes, setNotes] = useLocalStorage<IRawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<ITag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: INoteData) {
    setNotes((prevNotes: Array<INote>) => {
      return [
        ...prevNotes,
        { ...data, id: uuidv4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  function addTag(tag: ITag) {
    setTags((prev: ITag[]) => [...prev, tag]);
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
