import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World",
        isEditable:false
    }]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //state and action always we will get.
        //Payload ek object hai.
        //state:current state.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isTodoEditable:false

            }
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
              state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
             state.todos = state.todos.map((el)=>el.id===action.payload?{...el,isEditable:!el.isEditable}:{...el,isEditable:false})
        },
        editTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=> todo.id===action.payload.id?{...todo,text:action.payload.text,isEditable:false}:todo)
        }
    }
})


export const {addTodo,removeTodo,updateTodo,editTodo} = todoSlice.actions


export default todoSlice.reducer



//Never mutate your state
//redux toolkit khud sab mange krta hai .phle manually likhna pdta tha.


