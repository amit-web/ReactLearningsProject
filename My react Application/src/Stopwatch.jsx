
import { useState,useRef,useEffect } from 'react'
import './Stopwatch.css';

function Stopwatch() {

const [time,setTime] = useState(0);
const intervalRef = useRef(null);  //Refrence to store the interval ID;
const timeRef = useRef(0)

useEffect(()=>{
  // we are using this becuase when our component unmounts ,
  // will se diffrent behaviour of the stopWatch and memory leak can happen so better we will clearinterval using useEffect.
 return ()=>{
  clearInterval(intervalRef.current)
 }
})


const start = ()=>{
  // update()
 //Only start if not already running.
  if(!intervalRef.current){
      intervalRef.current = setInterval(update,1000);
  }
  console.log(intervalRef.current);
}

const update = ()=>{
   timeRef.current ++;
   setTime(timeRef.current);
}
const pause = ()=>{
 //clear the interval
 clearInterval(intervalRef.current);
 console.log(intervalRef.current);
 intervalRef.current = null;
}
const reset = ()=>{

//Resetting and clearing interval.
pause();
setTime(0);
timeRef.current = 0;
}

  return (

            <div>
                <h1>{time}</h1>
                <h1>Stop Watch with react:</h1>
                <button onClick={start}>start</button>
                <button onClick={pause}>pause</button>
                <button onClick={reset}>Restart</button>
            </div>
  )
}

export default Stopwatch
