import React from "react";

function Input(props) {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
export default Input;
