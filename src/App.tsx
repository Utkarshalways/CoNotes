import "@blocknote/core/fonts/inter.css";
import React, { useState, useCallback, useEffect } from "react";
import "@blocknote/mantine/style.css";
import Sidebar from "./sidebar";
import File from "./File";
import { Note } from "./types";




export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  const [currNoteId, setcurrNoteId] = useState<number>(null);

  const addnewNote = () => {
    const newNote = { id: Date.now(), content: "" };
    setNotes([...notes, newNote]);
    setcurrNoteId(notes.length);
  };

  const handleNotechange = (content: string) => {
    const updatedNotes = [...notes];
    updatedNotes[currNoteId].content = content;
    setNotes(updatedNotes);
  };

  const handleselectNote = (
    id:number) => {
    setcurrNoteId(id);
  };

  
  
  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currNoteId === id) {
      setcurrNoteId(null);
    }
    return null;
  };
  


  return (
    <div className="flex h-screen flex-row">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        notes={notes}
        onselectNote={handleselectNote}
        addNewNote = {addnewNote}
        deleteNote={deleteNote}
      />
      <div className="w-full ">

      
        {currNoteId !== null && notes.length > 0 && (
          <File 
          title="untitled"
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          note={notes[currNoteId]}
          onNoteChange={handleNotechange}
          date=""
          deleteNote={deleteNote}
          />
        )}
        
      </div>
    </div>

);
}




/* <>
// useEffect(() => {
  

// console.log("hello;;",notes)

  
// }, [currNoteId,notes])

    
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