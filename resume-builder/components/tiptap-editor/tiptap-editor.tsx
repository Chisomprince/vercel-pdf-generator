"use client";

import "./styles.scss";

// import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, Extensions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./menu-bar";

type TiptapEditorProps = {
  extensions?: Extensions;
  value: string | undefined;
  onChange: (editor: string) => void;
};
const TiptapEditor = ({ extensions, value, onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      //   Color.configure({ types: [TextStyle.name, ListItem.name] }),
      //   TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "z-10 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none border-none h-48 bg-muted max-h-48 p-4 overflow-y-scroll",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return <p>loading...</p>;
  }

  return (
    <div className="border rounded divide-y">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="focus:outline-none" />
    </div>
  );
};
export default TiptapEditor;
