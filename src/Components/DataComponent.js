import React, {useState} from 'react'
import ChildCompoent from './ChildCompoent';
export default function DataComponent() {

 let name="Bhavna";
 const [nameWithHooks, setnameWithHooks ]=useState("Bhavna");
 const changeMyName=()=>{
     console.log("Inside Change Name")
     name="Madhuri";
 }

const changeMyNameHooks=()=>{
    console.log("Hy");
    setnameWithHooks("Madhuri");
} 

  return (
    <div>
        <h1>My Name Is : {name}</h1>
        <button onClick={changeMyName}>Change Name</button>

        <p>------</p>
        <h1>My Name is {nameWithHooks}</h1>
        <button onClick={changeMyNameHooks}>Change Name</button>

        <p>-----</p>
        <ChildCompoent title="Text"></ChildCompoent>
    </div>
  )
}
