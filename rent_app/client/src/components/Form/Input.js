import React from "react";

export const Input = props => (
  <div className="form-group">
    <label>{props.label}</label>
    {props.children}
    <input className="form-control" {...props} />
  </div>
);
