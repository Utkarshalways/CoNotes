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
  onNoteChange: (content: string) => void; // Corrected prop name
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
  const [html, setHTML] = useState<string>("");

  const onChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
    onNoteChange(html); // Call the function to update the note's content
  };
  console.log(html);
  console.log(note.id);
  // console.log(note.content);

  useEffect(() => {
    const loadInitialHTML = async () => {
      const blocks = await editor.tryParseHTMLToBlocks(note.content);
      editor.replaceBlocks(editor.document, blocks);
    };
    loadInitialHTML();
  }, [editor, note]);


    onNoteChange(html);


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

{
  /*

  import React, { useState, useCallback, useEffect } from "react";
  import { useCreateBlockNote } from "@blocknote/react";
  import { BlockNoteView } from "@blocknote/mantine";
  import "@blocknote/mantine/style.css";
  import { Note } from "./types";

  
    type prams = {
      title: string;
      date: string,
      toggleSidebar : ()=>void,
      isOpen : boolean,
      note : Note,    
      onnoteChange : (content : string ) => void;
    };
    
    
    
    const File = ({ isOpen,toggleSidebar,title,date,note,onnoteChange }:prams) => {

    const editor = useCreateBlockNote();
    
    // Usage
    
    const [html, setHTML] = useState<string>("");
    
    console.log(`This is the editor From the Blocknote`, editor);
    // console.log(`This is the editor Content From the Blocknote`,editor.getcontent());
    
    const onChange = async () => {
      // Converts the editor's contents from Block objects to HTML and store to state.
      const html = await editor.blocksToHTMLLossy(editor.document);
      setHTML(html);
      console.log(html);
      localStorage.setItem("htmldata",html);
    };

    
    if(note.content){

      
    useEffect(() => {
      async function loadInitialHTML() {
          const blocks = await editor.tryParseHTMLToBlocks(note.content);
          editor.replaceBlocks(editor.document, blocks);
        }
        loadInitialHTML();
      }, [editor]);
      
    }
    
    
    
    return (
      <div className="">
        <div className="flex w-full bg-mainbg items-center justify-between border-b  p-1">
        <div className="flex  gap-4 items-center">
        <i
              className={`${
                isOpen
                ? "hidden"
                : "ml-2 fa-duotone fa-solid fa-square-right cursor-pointer"
              }`}
              onClick={toggleSidebar}
              ></i>
              <h2 className=" hover:bg-white px-2 py-1 rounded-md text-bold">
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
