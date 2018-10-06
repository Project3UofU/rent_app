import React from "react";
import "./DeleteButton.css";

const DeleteButton = (props) => (
    <div className="btn del-btn btn-sm" {...props}>
        {props.children}
        {/* <span className="tooltip">
            This will permantly delete this item! It cannot be undone! 
        </span> */}
    </div>
);

export default DeleteButton;