import "@blocknote/core/fonts/inter.css";
import React, { useState, useCallback, useEffect } from "react";
import "@blocknote/mantine/style.css";
import Sidebar from "./sidebar";
import File from "./File";
import { Note } from "./types";




export default function App() {

  // this is for the dark mode
   const [theme, setTheme] = useState<string>("light");

   useEffect(() => {
     const storedTheme = localStorage.getItem("theme");
     if (storedTheme) {
       setTheme(storedTheme);
     } else {
       const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
       setTheme(userMedia.matches ? "dark" : "light");
     }
   }, []);

   useEffect(() => {
     document.documentElement.classList.toggle("dark", theme === "dark");
     localStorage.setItem("theme", theme);
   }, [theme]);



  const [isOpen, setIsOpen] = useState(true);
  const [anynotesExist, setanynotesExist] = useState(false);


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


  
    useEffect(() => {
      
      if(notes.length > 0){
        setanynotesExist(true);
      }
      else{

        setanynotesExist(false);
      }

    }, [notes.length]);
    

  


  return (
    <div className="flex h-screen flex-row dark:bg-zinc-800 dark:text-white">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        notes={notes}
        onSelectNote={handleselectNote}
        addNewNote={addnewNote}
        deleteNote={deleteNote}
      />
      <div
        className={`w-full + ${
          anynotesExist ? `w-full` : `flex justify-center items-center`
        }`}
      >
        {currNoteId !== null && notes.length > 0 && (
          <File
            title="untitled"
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            note={notes[currNoteId]}
            onNoteChange={handleNotechange}
            date=""
            deleteNote={deleteNote}
            theme={theme}
          />
        )}

        {notes.length === 0 && (
          // this is for the empty page if there is no file open in the editor tab

          <div className="flex justify-center items-center ">
            heyy this will show up only if you have not created a file so please
            create a file
            <h2></h2>
            <div></div>
          </div>
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
      