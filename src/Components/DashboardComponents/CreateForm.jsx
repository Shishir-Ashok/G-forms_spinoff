import React, { Component } from "react";
import "./CreateForm.scss";
import MultiLineInput from "../FormSections/MultiLineInput";
import { v4 as uuidv4 } from "uuid";
import RadioInput from "../FormSections/Radio/RadioInput";
export class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formRenderArray: [
        { id: uuidv4(), formElement: "M" },
        { id: uuidv4(), formElement: "M" },
        { id: uuidv4(), formElement: "R", radios: 2 },
      ],
    };
  }
  removeSection = (id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        formRenderArray: prevState.formRenderArray.filter(
          (formType) => formType.id !== id
        ),
      };
    });
  };
  setRadios = (id, radios) => {
    this.setState((state) => ({
      ...state,
      formRenderArray: state.formRenderArray.map((formType) =>
        formType.id === id ? { ...formType, radios } : { ...formType }
      ),
    }));
  };
  getComponents = (formType, idx) => {
    switch (formType.formElement) {
      case "M":
        return (
          <MultiLineInput
            key={formType.id}
            id={formType.id}
            sectionIndex={idx + 1}
            removeSection={() => this.removeSection(formType.id)}
          />
        );
      case "R":
        return (
          <RadioInput
            key={formType.id}
            id={formType.id}
            sectionIndex={idx + 1}
            removeSection={() => this.removeSection(formType.id)}
            radios={formType.radios}
            setRadios={this.setRadios}
          />
        );
    }
  };
  renderForm = () => {
    return this.state.formRenderArray.map((formType, idx) =>
      this.getComponents(formType, idx)
    );
  };
  render() {
    const form = this.renderForm();
    return (
      <div className="Create-Form-container">
        <div className="Create-Form-header">Create Form</div>
        <div> {form}</div>
      </div>
    );
  }
}

export default CreateForm;
