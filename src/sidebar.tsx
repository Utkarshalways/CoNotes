import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Note } from "./types";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  notes: Note[];
  onSelectNote: (index: number) => void;
  addNewNote: () => void;
  deleteNote: (id: number) => void;
  // theme:string,
};

const Sidebar = ({
  isOpen,
  toggleSidebar,
  notes,
  onSelectNote,
  addNewNote,
  deleteNote,
}: SidebarProps) => {
  return (
    <div
      className={` ${
        isOpen
          ? "w-1/5 bg-mainbg h-full border-r flex flex-col justify-between dark:bg-maindbg"
          : "hidden"
      }`}
    >
      <div className="header border-b p-2 bg-white flex justify-between items-center dark:bg-zinc-700">
        <h2>utkarsh</h2>
        <div className="otherdetails flex items-center justify-between gap-4">
          <i
            className="fa-duotone fa-file-circle-plus cursor-pointer"
            onClick={addNewNote}
          ></i>
          <i
            className="fa-sharp-duotone fa-solid fa-circle-xmark cursor-pointer"
            onClick={toggleSidebar}
          ></i>
        </div>
      </div>

      <div className="w-full dark:bg-maindbg dark:text-black ">
        <ul>
          {notes.map((note, index) => (
            <li
              key={note.id}
              onClick={() => onSelectNote(index)}
              className="flex items-center justify-between bg-white rounded-md p-2 hover:bg-slate-100 cursor-pointer dark:bg-mainbg "
            >
              <div className="text-xs">Note {index + 1}</div>
              <div className="flex justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <i className="fa-light fa-ellipsis cursor-pointer"></i>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => deleteNote(note.id)}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t bg-white py-3 px-1 flex items-center justify-between dark:bg-zinc-700">
        <div className="settings flex items-center gap-2">
          <h4 className="text-xs">Settings</h4>
          <i className="fa-duotone fa-solid fa-gear cursor-pointer"></i>
        </div>
        <div className="flex gap-2">
           <a href="https://www.linkedin.com/in/utkarsh-sharma-164733228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <i className="fa-brands fa-linkedin cursor-pointer h-2"/>
           </a>
          
            <a href="https://github.com/utkarshalways" target="_blank" >
          <i className="fa-brands fa-square-github cursor-pointer"/>
         
            </a>
          <a href="https://twitter.com/Utkarshalways" target="_blank">
            <i className="fa-brands fa-square-x-twitter cursor-pointer"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
