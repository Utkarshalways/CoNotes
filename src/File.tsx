import React, { useEffect, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Note } from "./types";

type Params = {
  title: string;
  date: string;
  toggleSidebar: () => void;
  isOpen: boolean;
  note: Note;
  onNoteChange: (content: string) => void;
  deleteNote : (id:number) => void;
};

const File = ({
  isOpen,
  toggleSidebar,
  title,
  date,
  note,
  onNoteChange,
  deleteNote,
}: Params) => {
  const editor = useCreateBlockNote();


  // const [noteContent, setnoteContent] = useState()

  const handleContentChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    console.log("hello;;html",html);
    onNoteChange(html); // Update the parent component with the new content
  };



  
  useEffect(() => {
    // console.log(note.id)
    console.log("hello;;editior change")
    
  }, [editor])
  
  // console.log("editor ki id hai yeh",editor.document);

  const fornewhtml = ""


  useEffect(() => {
    const loadInitialContent = async () => {
      if (note.content != "") {
        const blocks = await editor.tryParseHTMLToBlocks(note.content);
        // console.log("hello;;blocks",blocks,note.content)
        editor.replaceBlocks(editor.document,blocks);
        // note.content = "";
      }
      else if(note.content === ""){
        const blocks = await editor.tryParseHTMLToBlocks(fornewhtml);
        // console.log("hello;;blocks", blocks, note.content);
        editor.replaceBlocks(editor.document, blocks);
      }
    };

    loadInitialContent();
  }, [note, editor]); // Ensure this runs when either note or editor changes



  return (
    <div className="">
      <div className="flex w-full bg-mainbg items-center justify-between border-b p-1">
        <div className="flex gap-4 items-center">
          <i
            className={`${
              isOpen
                ? "hidden"
                : "ml-2 fa-duotone fa-solid fa-square-right cursor-pointer"
            }`}
            onClick={toggleSidebar}
          ></i>
          <h2 className="hover:bg-white px-2 py-1 rounded-md text-bold">
            {title}
          </h2>
        </div>
        <div className="text-xs hover:bg-white px-2 py-1 rounded-md text-bold">
          {date}
        </div>
        <button
          className="ml-4 text-red-600 hover:text-red-800"
          onClick={() => deleteNote(note.id)} // Call deleteNote with the note's id
        >
          Delete Note
        </button>
      </div>
      <BlockNoteView
        editor={editor}
        onChange={handleContentChange}
        data-color-scheme="light"
      />
    </div>
  );
};

export default File;

{
  /*import React, { useEffect, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Note } from "./types";

type Params = {
  title: string;
  date: string;
  toggleSidebar: () => void;
  isOpen: boolean;
  note: Note;
  onNoteChange: (content: string) => void;
};

const File = ({
  isOpen,
  toggleSidebar,
  title,
  date,
  note,
  onNoteChange,
}: Params) => {
  const editor = useCreateBlockNote();
  const [html, setHTML] = useState<string>(note.content);

  const onChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
    onNoteChange(html); // Update the parent with the new content
  };

  console.log(note.id)
  console.log(note.content)

  useEffect(() => {
    const loadInitialHTML = async () => {
      if (note.content) {
        const blocks = await editor.tryParseHTMLToBlocks(note.content);
        editor.replaceBlocks(editor.document, blocks);
      }
    };
    loadInitialHTML();
  }, [note.content, editor]); // Dependencies on note.content and editor

  return (
    <div className="">
      <div className="flex w-full bg-mainbg items-center justify-between border-b p-1">
        <div className="flex gap-4 items-center">
          <i
            className={`${
              isOpen
                ? "hidden"
                : "ml-2 fa-duotone fa-solid fa-square-right cursor-pointer"
            }`}
            onClick={toggleSidebar}
          ></i>
          <h2 className="hover:bg-white px-2 py-1 rounded-md text-bold">
            {title}
          </h2>
        </div>
        <div className="text-xs hover:bg-white px-2 py-1 rounded-md text-bold">
          {date}
        </div>
      </div>
      <BlockNoteView
        editor={editor}
        onChange={onChange}
        data-color-scheme="light"
      />
    </div>
  );
};

export default File;
*/
}
