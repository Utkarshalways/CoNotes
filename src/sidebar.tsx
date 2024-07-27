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
          ? "w-1/6 bg-mainbg h-full border-r   flex flex-col justify-between"
          : "hidden"
      }`}
    >
      <div className="header border-b p-2 bg-white flex justify-between  items-center">

          <h2 className="">utkarsh</h2>
     
        <div className="otherdetails flex items-center justify-between gap-4">
          {/* //there will be a condition here if the sidebar is open then different arrow if not then diff */}

          <i className="fa-duotone fa-file-circle-plus"></i>
          <i className="fa-sharp-duotone fa-solid fa-circle-xmark cursor-pointer"  onClick={toggleSidebar}></i>
        </div>
      </div>

      <div className="w-full  ">
        <FileComponent fileName={"newfile1"} />

        <FileComponent fileName={"newfile2"} />

        <FileComponent fileName={"newfile3"} />
      </div>

      <div className="border-t bg-white py-3 px-1 flex items-center justify-between">
        <div className="settings flex items-center gap-2">
          <h4 className="text-xs">settings</h4>
          <i className="fa-duotone fa-solid fa-gear cursor-pointer"></i>
        </div>
        <div className="  flex gap-2 ">
          <i className="fa-brands fa-linkedin cursor-pointer h-2"></i>
          <i className="fa-brands fa-square-github cursor-pointer"></i>
          <i className="fa-brands fa-square-x-twitter cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
