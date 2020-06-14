import React from "react";
import { useInput } from "../../../Hooks/useInput";

export default function Radio(props) {
  const values = useInput("");
  return (
    <div className="Radio">
      <input className="Option-Input" {...values} placeholder={`option`} />
      <img
        alt="radio-btn"
        src={props.isClicked ? "here.svg" : "not-here.svg"}
      />
    </div>
  );
}
