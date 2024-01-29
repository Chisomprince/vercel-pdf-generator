// import "./MenuBar.scss";

import { Fragment } from "react";

import { Editor } from "@tiptap/react";
import {
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineStrikethrough,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaParagraph } from "react-icons/fa";
import { GoBold } from "react-icons/go";
import {
  LuHeading1,
  LuHeading2,
  LuRedo2,
  LuUndo2,
  LuWrapText,
} from "react-icons/lu";
import { RiFormatClear } from "react-icons/ri";
import MenuItem from "./menu-items";
const MenuBar = ({ editor }: { editor: Editor }) => {
  const items = [
    {
      icon: GoBold,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: AiOutlineItalic,
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: AiOutlineStrikethrough,
      title: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    // {
    //   icon: LuCode2,
    //   title: "Code",
    //   action: () => editor.chain().focus().toggleCode().run(),
    //   isActive: () => editor.isActive("code"),
    // },
    // {
    //   icon: AiOutlineHighlight,
    //   title: "Highlight",
    //   action: () => editor.chain().focus().toggleHighlight().run(),
    //   isActive: () => editor.isActive("highlight"),
    // },
    {
      type: "divider",
    },
    {
      icon: LuHeading1,
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: LuHeading2,
      title: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: FaParagraph,
      title: "Paragraph",
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive("paragraph"),
    },
    {
      icon: AiOutlineUnorderedList,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: AiOutlineOrderedList,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    // {
    //   icon: LuLayoutList,
    //   title: "Task List",
    //   action: () => editor.chain().focus().toggleTaskList().run(),
    //   isActive: () => editor.isActive("taskList"),
    // },
    // {
    //   icon: AiOutlineCode,
    //   title: "Code Block",
    //   action: () => editor.chain().focus().toggleCodeBlock().run(),
    //   isActive: () => editor.isActive("codeBlock"),
    // },
    {
      type: "divider",
    },
    // {
    //   icon: LuQuote,
    //   title: "Blockquote",
    //   action: () => editor.chain().focus().toggleBlockquote().run(),
    //   isActive: () => editor.isActive("blockquote"),
    // },
    // {
    //   icon: RiSeparator,
    //   title: "Horizontal Rule",
    //   action: () => editor.chain().focus().setHorizontalRule().run(),
    // },
    {
      type: "divider",
    },
    {
      icon: LuWrapText,
      title: "Hard Break",
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: RiFormatClear,
      title: "Clear Format",
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      type: "divider",
    },
    {
      icon: LuUndo2,
      title: "Undo",
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: LuRedo2,
      title: "Redo",
      action: () => editor.chain().focus().redo().run(),
    },
  ];

  return (
    <div className="flex gap-2 flex-wrap py-3 px-4">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === "divider" ? (
            <div className="border h-full" />
          ) : (
            //@ts-ignore
            <MenuItem item={item} />
          )}
        </Fragment>
      ))}{" "}
      {/* <input
        type="color"
        className="w-6"
        onChange={(event) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes("textStyle").color}
        data-testid="setColor"
      /> */}
    </div>
  );
};

export default MenuBar;
