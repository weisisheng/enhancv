import React from "react";
import PropTypes from "prop-types";

import Label from "../Label";

import "./Editable.css";

export default class Editable extends React.Component {
  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
  }
  onFocus(e) {
    console.log("OnFocus");
  }

  onBlur(e) {
    console.log("Bill Blurr")
    console.log(this.props);
    if(this.props.validate) {
      debugger;
      this.props.validate()
    }
  }

  render() {
    const {
      width,
      minLength,
      maxLength,
      disabled,
      errorMessage,
      children,
      htmlId,
      name,
      label,
      placeholder,
      value,
      onChange,
      single,
      rows,
      ...props
    } = this.props
    return (
      <div>
        <Label
          htmlFor={htmlId}
          label={label}
        />
        <textarea
          className="editable"
          disabled={disabled ? "disabled" : ""}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          {...props}
          style={{width}}
          minLength={minLength}
          maxLength={maxLength}
          rows={single ? 1 : rows}
        >
          {placeholder || value}
        </textarea>
      </div>
    );
  }
}
