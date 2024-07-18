import React, { useState, useCallback, useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
{/*
   // Creates a new editor instance.
  const editor = useCreateBlockNote({
    element: editorRef.current,
    onChange: handleEditorChange,
  });

  const editorrr = useCreateBlockNote();
     blocksToHTMLLossy(blocks?: Block[]): string;

  // Usage
  const HTMLFromBlocks = editor.blocksToHTMLLossy(blocks);
  const [html, setHTML] = useState<string>("");

  console.log(`This is the editor From the Blocknote`, editor);
  console.log(`This is the editor Content From the Blocknote`,editor.getcontent());

    const onChange = async () => {
      // Converts the editor's contents from Block objects to HTML and store to state.
      const html = await editor.blocksToHTMLLossy(editor.document);
      setHTML(html);
    };

     useEffect(() => {
       async function loadInitialHTML() {
         const blocks = await editorrr.tryParseHTMLToBlocks(html);
         editorrr.replaceBlocks(editorrr.document, blocks);
       }
       loadInitialHTML();
     }, [editorrr]);

    const htmlInputChanged = useCallback(
      async (e: ChangeEvent<HTMLTextAreaElement>) => {
        // Whenever the current HTML content changes, converts it to an array of
        // Block objects and replaces the editor's content with them.
        const blocks = await editorrr.tryParseHTMLToBlocks(e.target.value);
        editorrr.replaceBlocks(editorrr.document, blocks);
      },
      [editorrr]
    );
    */}
  

  const File = ({ title }) => {
    return (

      <div>

      <div className="flex w-full border-b border-slate-300 p-2">
        <h2 className="text-xs">{title}</h2>


      </div>
      
      </div>
    );
  };

  export default File;
