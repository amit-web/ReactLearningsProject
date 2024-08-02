import { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
// import TodoContextProvider from "./context/TodoContext";

function App() {
  console.log("Amit Mehta");
  return (
    <>
        <div>
          <h1>Creating Small project with context Api</h1>
          <Todo />
        </div>
    </>
  );
}

export default App;
