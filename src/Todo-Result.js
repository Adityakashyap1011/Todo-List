import React from "react";
import NewTodoItem from "./NewTodoItem.js";

function Result({list ,deleteOne}){
    return(
        <div className="result">
            <ul>
                {
                    list.map((todo,idx)=>{
                        return (
                            <NewTodoItem key={idx} task={todo} index={idx} deleteOne={deleteOne}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Result;


