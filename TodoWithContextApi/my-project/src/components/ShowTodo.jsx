import React from "react";
import { Button } from "./Button";

import { useState } from "react";
export default function ShowTodo({todoData,handleDelete,handleEdit,handleComplete}) {

  return (
    <>
      <div>
        <h2>Showing the todoList</h2>
        {todoData.map((value) => (
          <div key={value.id} className="showTodo">
            {" "}
            {/* Add key here */}
            <span className={value.status ? "crossed-out" : "normalText"}>{value.text}</span>
            <Button onClick={()=>handleEdit(value.id)} className="button">Edit</Button>
            <Button onClick={()=>handleDelete(value.id)} className="button" >Delete</Button>
            <Button onClick={()=>handleComplete(value.id)} className="button">{value.status?"Completed":"Not Done"}</Button>

          </div>
        ))}
      </div>
    </>
  );
}
