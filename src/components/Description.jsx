import React from "react";
import Header from "./Header";

function Description(props) {
  return (
    <div className="description">
      <Header text="Warrior Log" />
      <p>{props.text}</p>
    </div>
  );
}

export default Description;
