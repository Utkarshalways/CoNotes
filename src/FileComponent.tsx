import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { Card ,CardTitle } from './components/ui/card';


type FileComponentProp = {

  filename : string,
  deleteNote : ()=> void;


}


const FileComponent = ({fileame,deleteNote} : FileComponentProp) => {
  return (
    <div className="flex items-center justify-between bg-white  rounded-md p-2 hover:bg-slate-100">
      <div className="text-xs">{fileName}</div>

      <div className=" flex justify-center  ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <i className="fa-light fa-ellipsis"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem onClick={deleteNote} >Delete</DropdownMenuItem>
         
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default FileComponent