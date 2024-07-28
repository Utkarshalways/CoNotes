import "@blocknote/core/fonts/inter.css";
import React, { useState, useCallback, useEffect } from "react";
import "@blocknote/mantine/style.css";
import { Button } from "./components/ui/button";
import Sidebar from "./sidebar";
import File from "./File";
import { Note } from "./types";




export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  const [currNoteIdx, setcurrNoteIdx] = useState<number>(null);

  const addnewNote = () => {
    const newNote = { id: Date.now(), content: "" };
    setNotes([...notes, newNote]);
    setcurrNoteIdx(notes.length);
  };

  const handleNotechange = (content: string) => {
    const updatedNotes = [...notes];
    updatedNotes[currNoteIdx].content = content;
    setNotes(updatedNotes);
  };

  const handleselectNote = (index:number) => {
    setcurrNoteIdx(index);
  };

  return (
    <div className="flex h-screen flex-row">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        notes={notes}
        onselectNote={handleselectNote}
      />
      <div className="w-full ">
        {/* <BlockNoteView
          editor={editor}
          data-color-scheme="light"
          // onChange={onChange}
        /> */}
        {currNoteIdx !== null && (
          <File 
          title="untitled"
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
            note={notes[currNoteIdx]}
            onNoteChange={handleNotechange}
            date=""
          />
        )}
        <button
          onClick={addnewNote}
          className="p-2 bg-blue-500 text-white rounded"
        >
          New File
        </button>
      </div>
    </div>

    
  );
}




/* <>
          <div className="wrapper">
            <div>Input (BlockNote Editor):</div>
            <div className="item">
             <BlockNoteView editor={editor} onChange={onChange} />    
            </div>
            <div>Output (HTML):</div>
            <div className="item bordered">
              <pre>
                <code>{html}</code>
              </pre>
            </div>
          </div>
        </>

        <div className={"wrapper"}>
          <div>Input (HTML):</div>
          <div className={"item bordered"}>
            <code>
              <textarea defaultValue={html} onChange={htmlInputChanged} />
            </code>
          </div>
          <div>Output (BlockNote Editor):</div>
          <div className={"item"}>
            <BlockNoteView
              editor={editorrr}
              editable={false}
              data-color-scheme="light"
            />
          </div>
        </div>*/