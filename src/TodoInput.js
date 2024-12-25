import React, { useState } from "react";

function NewTodo(props){
    const [val,setval]=useState("");

    function handleChange(e){
        const newVal=e.target.value;
        setval(newVal);
    }

    function handleClick(){
        let task=val;
        if(val.trim()!==""){
          setval("");
            props.addtodo(task);  
        }
        else{
            alert("Please enter a task");
        }
    }
    return(
        <div className="NewTodo">
            <input type="text" name="Todo" value={val} placeholder="New Todo" onChange={handleChange}required />
            <br></br>
            <br></br>
            <button onClick={handleClick}>Add new task</button>
        </div>
    );
}

export default NewTodo;