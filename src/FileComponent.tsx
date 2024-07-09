import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { Card ,CardTitle } from './components/ui/card';


const FileComponent = ({fileName}) => {
  return (
    <div className='flex items-center justify-between p-1 border rounded-md'>
      {fileName}

      <ToggleGroup type="single">
        <ToggleGroupItem value="edit">
          <i className="fa-light fa-pen-to-square"></i>
        </ToggleGroupItem>
        <ToggleGroupItem value="delete">
          <i className="fa-duotone fa-trash"></i>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default FileComponent