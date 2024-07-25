import React, { useState, useCallback, useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";



    type prams = {
      title: string;
      date: string;
      toggleSidebar : ()=>void,
      isOpen : boolean,
    };

  

  const File = ({ isOpen,toggleSidebar,title,date }:prams) => {

    const editor = useCreateBlockNote({
      // element: editorRef.current,
      // onChange: handleEditorChange,
    });

    // Usage

    // Usage

    const [html, setHTML] = useState<string>("");

    console.log(`This is the editor From the Blocknote`, editor);
    // console.log(`This is the editor Content From the Blocknote`,editor.getcontent());

    const onChange = async () => {
      // Converts the editor's contents from Block objects to HTML and store to state.
      const html = await editor.blocksToHTMLLossy(editor.document);
      setHTML(html);
      console.log(html);
    };

    localStorage.setItem("htmldata",html);

    

    return (
      <div>
        <div className="flex w-full items-center justify-between border-b border-slate-300 p-2">
          <div className="flex  gap-4 justify-center">
            <i className={`${isOpen? "hidden":"ml-2 fa-solid fa-arrow-right-from-line"}`} onClick={toggleSidebar}></i>
            <h2 className="text-xs">{title}</h2>
          </div>
          <div>{date}</div>
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
