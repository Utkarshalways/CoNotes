import "@blocknote/core/fonts/inter.css";
import React, { useState, useEffect } from "react";
import "@blocknote/mantine/style.css";
import Sidebar from "./sidebar";
import File from "./File";
import { Note } from "./types";
import { useToast } from "./components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  // this is for the dark mode
  const [theme, setTheme] = useState<string>("light");
  const { toast } = useToast();


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
     toast({
       title: "Created",
       description: "your file is created now",
     });
  };

  const handleNotechange = (content: string) => {
    const updatedNotes = [...notes];
    updatedNotes[currNoteId].content = content;
    setNotes(updatedNotes);
  };

  const handleselectNote = (id: number) => {
    setcurrNoteId(id);
  };


  const handlethemeChange = (theme: string) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currNoteId === id) {
      setcurrNoteId(null);
    }
    toast({
      variant: "destructive",
      title: "Deleted",
      description: "your file deleted can not be restored now"
      
    });
    return null;
  };

  useEffect(() => {
    if (notes.length > 0) {
      setanynotesExist(true);
    } else {
      setanynotesExist(false);
    }
  }, [notes.length]);

  return (
    <div className="flex h-screen flex-row dark:bg-zinc-800 dark:text-white">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        notes={notes}
        onSelectNote={handleselectNote}
        addNewNote={addnewNote}
        deleteNote={deleteNote}
        theme={theme}
        handlethemeChange={handlethemeChange}
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
        
          <div className="flex justify-center items-center flex-col gap-6 ">
            <h2 className="text-[#1D2A2F] dark:text-[#9BC1C5] text-4xl ">
              Create.Edit.Update
            </h2>

            <div
              className="border-[#9BC1C5] border p-3 px-7 flex justify-center items-center gap-2 rounded-md hover:text-white hover:bg-[#3C5B62] cursor-pointer hover:border-[#9BC1C5] dark:border-2 group"
              onClick={() => {
              //  i want to add the toast here
              addnewNote();
               
              }}
            >
          
              <i className="fa-duotone fa-solid fa-circle-plus text-center"></i>
              <div className="text-[#1D2A2F] dark:text-[#9BC1C5]  group-hover:text-white">
                add file
              </div>
            </div>
          </div>
        )}
      </div>
        <Toaster />
    </div>
  );
}
