import React from "react";

export const Input = props => (
  <div className="form-group">
    <label align="left" class="text-left">{props.label}</label>
    {props.children}
    <input className="form-control" {...props} />
  </div>
);
