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
