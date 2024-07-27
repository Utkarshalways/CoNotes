import "@blocknote/core/fonts/inter.css";
import React, { useState, useCallback, useEffect } from "react";
import "@blocknote/mantine/style.css";
import { Button } from "./components/ui/button";
import Sidebar from "./sidebar";
import File from "./File";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen flex-row">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full ">
        {/* <BlockNoteView
          editor={editor}
          data-color-scheme="light"
          // onChange={onChange}
        /> */}

        <File
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          title={"untitled"}
          date="12/july/2024"
        />
      </div>
    </div>

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
  );
}
