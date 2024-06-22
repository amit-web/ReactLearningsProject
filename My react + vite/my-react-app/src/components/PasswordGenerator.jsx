import React, { useState, useCallback,useEffect,useRef } from "react";

export const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passWord, setPassWord] = useState("");
  const passwordRef = useRef(null);

  useEffect(()=>{
     passgenerator()
  },[length,numberAllowed,charAllowed])

  const passgenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for(let i=1;i<=length;i++){
      //Math.random generate value betwen 0 to 1 and we are multiplying by string length
        let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char);
    }
   setPassWord(pass);

  },[length,numberAllowed,charAllowed,setPassWord])


  const handleChange = (e)=>{
    return setLength(e.target.value)
  }
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(passWord);
  },[passWord])


  return (
    <>

    <div className="w-6/12 bg-slate-800 h-1/6  m-auto  rounded-2xl ">
       <h1 className=" bg-red-600 text-4xl text-center text-white" >PasswordGenerator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded px-4 my-8 text-orange-500 bg-gray flex justify-center">
              <input type="text" id="myPasswordInput" name="password" placeholder="Showing the pass word"  value={passWord} readOnly ref={passwordRef}/>
              <button  className=" outline-none px-4 py-1  text-white shadow-lg"  style={{ backgroundColor: "Red" }} onClick={copyPassword}>Copy</button>

      </div>
      <div className="flex justify-center text-white gap-3">
        <div>
            <input type="range" id="myCheckbox" min={6} max={100} className="cursor-pointer" onChange={handleChange} />
            <label>{length}</label>
        </div>
        <div>
            <input type="checkbox" id="myCheckbox" defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label>Number Add</label>
        </div>

        <div>
              <input type="checkbox" defaultChecked={charAllowed}  onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}/>
              <label >Charcter Add</label>
        </div>


      </div>
    </div>




    </>
  );
};
