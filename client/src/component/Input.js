import React from 'react';

const Input = (props) => {
  return (
    <div className="mb-[18px]">
      <label htmlFor={props.labelFor} className="invisible absolute">
        {props.label}
      </label>

      <input
        type={props.type}
        id={props.labelFor}
        placeholder={props.placeholder}
        className="border-solid border-[#F0F0F0] rounded-[5px] border p-[20px] w-full max-w-[300px] text-[16px]"
      />
    </div>
  );
};

export default Input;
