import { Button } from "antd";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ReactQuillTest = () => {
  const [test, setTest] = React.useState<string>("");
  console.log("🚀 ~ file: reactQuill.tsx:7 ~ ReactQuillTest ~ test:", test);
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
    <>
      <div className='text-editor'>
        <ReactQuill
          style={{
            height: 400,
          }}
          theme='snow'
          modules={modules}
          formats={format}
          onChange={(value: string) => setTest(value)}
        />
      </div>
      <Button>123</Button>
    </>
  );
};

export default ReactQuillTest;
