import React, { useState } from "react";
import NewTodo from "./TodoInput.js"
import Buttons from "./Todo-button.js"
import Result from "./Todo-Result.js"
import "./App.css"


function App(){

  const [Todo,setTodo]=useState([]);

  function AddTodo(todo){
    setTodo([...Todo,todo]);
  }

  function deleteAll(){
    setTodo([]); 
  }

  function deleteOne(idx){
    const newTodo=Todo.filter((val,index)=> index!==idx);
    setTodo(newTodo);
  }

  return(
    <div className="App">
      <h1>Todo List</h1>
      <NewTodo addtodo={AddTodo}/>
      <br></br>
      <Buttons />
      <Result list={Todo} deleteOne={deleteOne}/>
      { Todo.length>0 && <button onClick={deleteAll}>Delete All</button>}
    </div>
  );
}

export default App;