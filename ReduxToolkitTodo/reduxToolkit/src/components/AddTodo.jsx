import React, { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { addTodo, editTodo, updateTodo } from '../feature/todo/todoSlice';

const AddTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todos);
    const editingTodo = todos.find((todo)=>todo.isEditable);
    const [input,setInput] = useState(editingTodo?editingTodo.text:"")

    useEffect(()=>{
       setInput(editingTodo?editingTodo.text:"")
    },[editingTodo])

    const handleInputChange = (e)=>{
      setInput(e.target.value)
    }

    const addTodoHandler = (e)=>{
      e.preventDefault()

      if(editingTodo){
        dispatch(editTodo({id:editingTodo.id,text:input}))
        dispatch(updateTodo(editingTodo.id))
      }
      else{
        dispatch(addTodo(input))
      }
      setInput('')
    }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={handleInputChange}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {editingTodo?'Save':"Add Todo"}

    </button>
  </form>
  )
}

export default AddTodo