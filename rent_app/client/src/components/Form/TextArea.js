import React from "react";

export const TextArea = props => (
    <div className="form-group">
        <label>{props.label}</label>
        <textarea className="form-control" rows="5" {...props} />
    </div>
);