import React from "react";
import "./RadioInput.scss";
import { useInput } from "../../../Hooks/useInput";
import Radio from "./Radio";
import { v4 } from "uuid";
export default function RadioInput(props) {
  const values = useInput("");
  const renderRadios = () => {
    const radios = [];
    for (let i = 0; i < props.radios; i++) {
      const id = v4();
      radios.push(<Radio idx={id} key={id} />);
    }
    return radios;
  };
  return (
    <div className="MultiLine-Input-container">
      <div className="MultiLine-Input-header">{`Section ${props.sectionIndex}`}</div>
      <div className="Question-container">
        <div className="Question">
          <input
            className="SingleLine-Input"
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
        <div className="Question-options">{renderRadios()}</div>
      </div>
    </div>
  );
}
