import React from "react";
import PropTypes from "prop-types";

const Label = ({htmlFor, label}) => (
    <label style={{display:"block"}} htmlFor={htmlFor}>
        {label}
    </label>
)

// Support for "required"
//  {required && <span style={{color: "red"}}> *</span>}

Label.PropTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool
}

export default Label;