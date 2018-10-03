import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-block btn-success ">
    {props.children}
  </button>
);
