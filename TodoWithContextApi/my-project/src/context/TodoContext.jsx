import { createContext,useContext } from "react";


const TodoContext = createContext();


const TodoContextProvider = ()=>{

    const deleteTodo = (id)=>{
        return console.log(id);
    }
const  todoData = {deleteTodo}
    return(
        <TodoContext.Provider  value={todoData}>

        </TodoContext.Provider>
    )
}


const useTodo = ()=>{
    return useContext(TodoContext)
}

export {useTodo}
export default TodoContextProvider;