
import React from 'react'
import { Button } from './Button'
import { useState } from 'react'
import ShowTodo from './ShowTodo';
import { useId } from 'react';


export const Todo = () => {

  let [todo,setTodo] = useState("");

  let [todoData,setTodoData] = useState([]);



  const id = useId();



const handleSubmit = ()=>{
  if(todo){
    setTodoData([...todoData,{text:todo,status:false,id:id}])
  }
  setTodo("")
}

const handleEdit = (id)=>{

}

const handleDelete = (id) => {
  setTodoData(todoData.filter(todo => todo.id !== id));
};


const handleComplete = (id)=>{
  setTodoData(todoData.map(todo=>todo.id===id?{...todo,status:!todo.status}:todo))
}

// console.log(todo);
  return (
     <>
       <div>
            <h1>Todo Application</h1>
            <div>
                <input type="text" placeholder='Enter the Todo' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                <Button  type="submit"  onClick={handleSubmit}>
                    Save
                </Button>
               <ShowTodo todoData={todoData} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete}/>
            </div>
       </div>
     </>
  )
}
