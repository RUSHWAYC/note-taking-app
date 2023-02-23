export interface INote extends INoteData {
  id: string;
}

export interface INoteData {
  title: string;
  markdown: string;
  tags: ITag[];
}

export interface ITag {
  id: string;
  label: string;
}

export interface IRawNote extends IRawNoteData {
  id: string;
}

export interface IRawNoteData {
  title: string;
  markdown: string;
  tagIds: string[];
}

export interface INoteProps {
  onSubmit: (data: INoteData) => void;
  onAddTag: (tag: ITag) => void;
  availableTags: ITag[];
}

export interface ISimplifiedNote {
  tags: ITag[];
  title: string;
  id: string;
}
