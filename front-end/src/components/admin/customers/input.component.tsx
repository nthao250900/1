import { Input } from "antd";
import React from "react";

const InputComponent = (props: {
  label: string;
  text: string;
  type: string;
}) => {
  const { label, text, type } = props;
  return (
    <div className='form'>
      <label htmlFor=''>{label}:</label>
      <div className='input'>
        <Input value={text} readOnly type={type} />
        <i className='fa-regular fa-pen-to-square'></i>
      </div>
    </div>
  );
};

export default InputComponent;
