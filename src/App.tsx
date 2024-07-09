import "@blocknote/core/fonts/inter.css";
import React from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Button } from "./components/ui/button";
import Sidebar from "./sidebar";
import Header from "./Header";
export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
   

  // Renders the editor instance using a React component.
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full flex flex-col gap-2 ">
        <Header />
        <BlockNoteView
          editor={editor}
          data-color-scheme="light"
          
        />
      </div>
    </div>
  );
}

