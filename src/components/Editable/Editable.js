import React from "react";
import PropTypes from "prop-types";

import Label from "../Label";

import "./Editable.css";

export default class Editable extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.emitChange = this.emitChange.bind(this);
  }

  emitChange(e) {}

  render() {
    const {
      width,
      disabled,
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
          onInput={this.emitChange}
          onBlur={this.emitChange}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          {...props}
          style={{width}}
          rows={single ? 1 : rows}
        >
          {placeholder || children}
        </textarea>
      </div>
    );
  }
}
