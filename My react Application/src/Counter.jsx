import React from "react";
import { useState } from "react";

export const Counter = () => {
//   let constvalue = 0;

  //first we are passing constvalue in all three places but ui updation will have in only one place.

  let [counter, setCounter] = useState(0);

  const add = () => {
    //    constvalue = constvalue+1
    //    console.log(constvalue)
    //Interview question on counter and also how value will be stored in previous value and how we can use it wisely.
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter((previousValue) => {
      return previousValue >= 20 ? 0 : previousValue + 1;
    });

    // validationcheck()
  };
  const subtract = () => {
    //    constvalue = constvalue-1
    setCounter((previousValue) => {
      return previousValue ===0 ? 0 : previousValue - 1;
    });
    //    validationcheck();
  };
  // const validationcheck = ()=>{
  //      if(counter===0){
  //         setCounter(0)
  //      }
  //      else if(counter>=20){
  //        setCounter(0)
  //      }

  // }
  //while i am using validation check function i was getting -1 is rendring to our UI while substarcting.
  //so we have another solution for that ; will remember previous value of the state and update according to that.
//Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
  return (
    <>
      <h1>Counter Application</h1>

      <h2>First place using same counter value in UI:{counter}</h2>
      <h3>Second place using same counter value in UI:{counter}</h3>
      <p> Third place using same counter value in UI:{counter}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>subtract</button>
    </>
  );
};
