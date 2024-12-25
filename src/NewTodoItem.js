import React from "react";

function NewTodoItem(props){
    return(
        <div>
            <li><div className="text" contentEditable="true" style={{border : "none"}}>{props.task}</div></li>
            <button onClick={()=>props.deleteOne(props.index)}>Delete</button>
        </div>
    );
}

export default NewTodoItem;