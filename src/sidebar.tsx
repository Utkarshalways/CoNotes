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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar,AvatarImage } from "@/components/ui/avatar";
import logo from "./assets/logo.jpeg";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  notes: Note[];
  onSelectNote: (index: number) => void;
  addNewNote: () => void;
  deleteNote: (id: number) => void;
  theme: string;
  handlethemeChange: (theme: string) => void;
};

const Sidebar = ({
  isOpen,
  toggleSidebar,
  notes,
  onSelectNote,
  addNewNote,
  deleteNote,
  theme,
  handlethemeChange,
}: SidebarProps) => {
  return (
    <div
      className={` w-1/5 md:w-1/4 lg:w-1/5 bg-mainbg min-h-screen border-r flex flex-col justify-between overflow-auto dark:bg-maindbg dark:border-zinc-500 transition-transform duration-300 ease-in-out transform    ${
        isOpen ? "translate-x-0" : "hidden"
      }`}
    >
      <div>
        <div className="header border-b p-2 bg-white flex justify-between items-center dark:bg-zinc-700 dark:border-zinc-500">
          <h2 className="flex justify-center items-center ">
            <Avatar className="h-6 w-7 mr-2">
              <AvatarImage src={logo} alt="pic" />
            </Avatar>
            User
          </h2>
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
          <div className="mt-2 flex flex-col justify-center gap-2">
            {notes.length != 0 && (
              <div>
                <div className="dark:text-white mx-2">Files</div>
                <ScrollArea className="h-72 w-full  border-y ">
                  <ul>
                    {notes.map((note, index) => (
                      <li
                        key={note.id}
                        onClick={() => onSelectNote(index)}
                        className="flex items-center justify-between hover:bg-[#F3F8F8] rounded-md p-2 cursor-pointer dark:bg-maindbg dark:text-white dark:hover:bg-[#4F838B] "
                      >
                        <div className="text-xs">Untitled {index + 1}</div>
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
                              <DropdownMenuItem
                                onClick={() => deleteNote(note.id)}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t bg-white py-3 px-1 flex items-center justify-between dark:bg-zinc-700 dark:border-zinc-500  ">
        <div className="settings flex items-center gap-2">
          <h4 className="text-xs">Settings</h4>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <i className="fa-duotone fa-solid fa-gear cursor-pointer"></i>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handlethemeChange(theme)}>
                switch
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/utkarsh-sharma-164733228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin cursor-pointer h-2" />
          </a>

          <a href="https://github.com/utkarshalways" target="_blank">
            <i className="fa-brands fa-square-github cursor-pointer" />
          </a>
          <a href="https://twitter.com/Utkarshalways" target="_blank">
            <i className="fa-brands fa-square-x-twitter cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
