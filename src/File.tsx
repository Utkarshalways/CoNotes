import React, { useEffect, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Note } from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  useToast } from "./components/ui/use-toast";


type Params = {
  title: string;
  date: string;
  toggleSidebar: () => void;
  isOpen: boolean;
  note: Note;
  onNoteChange: (content: string) => void;
  deleteNote: (id: number) => void;
  theme: string;
};

const File = ({
  isOpen,
  toggleSidebar,
  title,
  date,
  note,
  onNoteChange,
  deleteNote,
  theme,
}: Params) => {
  const editor = useCreateBlockNote();
  const { toast } = useToast();

  const [markdown, setMarkdown] = useState<string>("");
  const [htmll, setHtml] = useState<string>("");

  const onChangeMarkdown = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };

  const handleContentChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    onChangeMarkdown();
    setHtml(html);
    onNoteChange(html);
  };

  const fornewhtml = "";

  useEffect(() => {
    const loadInitialContent = async () => {
      if (note.content != "") {
        const blocks = await editor.tryParseHTMLToBlocks(note.content);
        // console.log("hello;;blocks",blocks,note.content)
        editor.replaceBlocks(editor.document, blocks);
        // note.content = "";
      } else if (note.content === "") {
        const blocks = await editor.tryParseHTMLToBlocks(fornewhtml);
        // console.log("hello;;blocks", blocks, note.content);
        editor.replaceBlocks(editor.document, blocks);
      }
    };

    loadInitialContent();
  }, [note, editor]); // Ensure this runs when either note or editor changes

  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    toast({
      variant:"default",
      title: "Copy",
      description: "your file is copied in your clipboard",
    });
  };

  return (
    <div className="min-h-screen overflow-auto">
      <div className="flex w-full bg-mainbg items-center justify-between border-b  p-1 dark:bg-maindbg">
        <div className="flex gap-4 items-center">
          <i
            className={`${
              isOpen
                ? "hidden"
                : "ml-2 fa-duotone fa-solid fa-square-right cursor-pointer"
            }`}
            onClick={toggleSidebar}
          ></i>
          <h2 className="hover:bg-white px-2 py-1 rounded-md text-bold dark:hover:bg-zinc-700">
            {title}
          </h2>
        </div>
        <div className="text-xs hover:bg-white px-2 py-1 rounded-md text-bold">
          {date}  
        </div>
      </div>
      <BlockNoteView
        editor={editor}
        onChange={handleContentChange}
        data-color-scheme={`${theme === "light" ? "light" : "dark"}`}
      />

      <div className="CopyBtns flex justify-evenly  m-12">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="border-[#9BC1C5] text-maindbg border p-3 w-48 flex justify-center items-center gap-2 rounded-md hover:text-white hover:bg-[#3C5B62] cursor-pointer hover:border-[#9BC1C5] dark:border-2 group">
              <h1 className="text-maindbg dark:text-[#9BC1C5]  group-hover:text-white">
                copy
              </h1>
              <i className="fa-duotone fa-solid fa-square-caret-down"></i>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="">File</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleCopy(markdown)}>
              markdown
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                handleCopy(htmll);
              }}
            >
              html
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default File;
