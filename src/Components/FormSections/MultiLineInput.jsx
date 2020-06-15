import React from "react";
import "./MultiLineInput.scss";
import { useInput } from "../../Hooks/useInput";
export default function MultiLineInput(props) {
  const values = useInput("");
  return (
    <div className="MultiLine-Input-container">
      <div className="MultiLine-Input-header">{`Section ${props.sectionIndex}`}</div>
      <input
        className="MultiLine-Input"
        {...values}
        placeholder="Add your question?"
      />
      <img
        className="MultiLine-Input-image"
        alt="delete"
        src="/assets/svg/icons/delete.svg"
        onClick={props.removeSection}
      />
    </div>
  );
}
