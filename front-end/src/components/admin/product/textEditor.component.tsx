import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TextEditor = ({
  height,
  setContent,
  value,
}: {
  value?: string | undefined;
  height: number;
  setContent: Function;
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      //   ['clean'],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const format = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
  ];

  return (
    <div className='text-editor'>
      <ReactQuill
        style={{
          height,
        }}
        theme='snow'
        modules={modules}
        formats={format}
        value={value}
        onChange={(value: string) => setContent(value)}
      />
    </div>
  );
};

export default TextEditor;
