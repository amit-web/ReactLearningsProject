import React, { useState } from "react";

export const Backgroundchanger = () => {
  const [color, setColor] = useState("olive");

  //Here one concept onlick will take function thats why we are passing directly a call back function to he button.
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
          <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

         <button onClick={()=>setColor("Red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "Red" }}>Red</button>
         <button onClick={()=>setColor("Green")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "Green" }}>Green</button>
         <button onClick={()=>setColor("Blue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "Blue" }}>Blue</button>
         <button onClick={()=>setColor("Pink")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "Pink" }}>Pink</button>
         <button onClick={()=>setColor("Brown")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "Brown" }}>Brown</button>
         <button onClick={()=>setColor("black")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "black" }}>black</button>
        </div>
      </div>


      </div>


    </>
  );
};
