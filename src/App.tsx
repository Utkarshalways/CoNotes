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

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    // Update time immediately
    updateTime();

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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

  // Retrieve notes from localStorage when the component mounts
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      setNotes(parsedNotes);
      if (parsedNotes.length > 0) {
        setcurrNoteId(parsedNotes[0].id); // Automatically select the first note
        setanynotesExist(true); // Update the anyNotesExist state
      }
    }
  }, []);

  // Save notes to localStorage whenever the notes array changes
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
      setanynotesExist(true);
    } else {
      setanynotesExist(false);
    }
  }, [notes]);
  
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
    //  toast({
    //    description: "on your destination",
    //  });
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
      description: "your file deleted can not be restored now",
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
    <div className="flex min-h-screen overflow-auto flex-row dark:bg-zinc-800 dark:text-white">
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
            title={"untitled " + (currNoteId + 1)}
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            note={notes[currNoteId]}
            onNoteChange={handleNotechange}
            date={time}
            deleteNote={deleteNote}
            theme={theme}
          />
        )}

        {notes.length === 0 && (
          // this is for the empty page if there is no file open in the editor tab

          <div className="flex justify-center items-center flex-col gap-6 ">
            <h2 className="text-maindbg dark:text-[#9BC1C5] text-6xl ">
              Create.Edit.Update
            </h2>

            <div
              className="border-mainbg border text-mainbg bg-maindbg p-3 w-48 flex  items-center gap-2 rounded-md hover:text-maindbg hover:bg-mainbg cursor-pointer hover:border-[#9BC1C5] dark:border-2 group justify-center "
              onClick={() => {
                addnewNote();
              }}
            >
              <i className="fa-duotone fa-solid fa-circle-plus text-center"></i>
              <div
                className="text-white dark:white
                group-hover:text-maindbg"
              >
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
