import React, { useState } from "react";
import FileComponent from "./FileComponent";
// import { Card,CardHeader,CardDescription,CardTitle } from "./components/ui/card";
// import { ToggleGroup,ToggleGroupItem } from "@radix-ui/react-toggle-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


type sidebarProps = {

  isOpen : boolean,
  toggleSidebar: ()=>void;
}

const sidebar = ({isOpen,toggleSidebar}:sidebarProps) => {

  

  return (
    <div
      className={` ${
        isOpen
          ? "w-1/6 bg-white h-full border-r border-r-slate-600  flex flex-col justify-between"
          : "hidden"
      }`}
    >
      <div className="header border-b border-slate-400 p-2  flex justify-between  items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-lg">user</h2>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <i className="fa-light fa-angle-down "></i>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="otherdetails flex items-center justify-between gap-4">
          {/* //there will be a condition here if the sidebar is open then different arrow if not then diff */}
          <i className="fa-duotone fa-square-left" onClick={toggleSidebar}></i>

          <i className="fa-duotone fa-file-circle-plus"></i>
        </div>
      </div>

      <div className="w-full  ">
        <FileComponent fileName={"newfile1"} />

        <FileComponent fileName={"newfile2"} />

        <FileComponent fileName={"newfile3"} />
      </div>

      <div className="border border-t-slate-400 py-3 px-1 flex items-center justify-between">
        <div className="github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </div>
        <div className="twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
