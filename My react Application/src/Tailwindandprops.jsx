import { Card } from "./Card";
import "./index.css";
export const Tailwindandprops = () => {
  const data = {
    name:"Amit"
  }
  const data1= {
    name:"Sunny"
  }
  const data2 = {
    name:"Rohan"
  }
  let rankArray= [1,2,3]
  return (
    <>
       <Card name = {data}  designation ="software Engineer" rank={rankArray}/>
       <Card name={data1} designation ="software Engineer 1"/>
       <Card name = {data2} designation ="software Engineer 1"/>
    </>
  );
};
