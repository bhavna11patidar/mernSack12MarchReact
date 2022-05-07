import React, {useState, useEffect } from 'react'

export default function UseEffectComp1() {

    const [name, setName]=useState("Bhavna");
    const [test, setTest]=useState("Test");
    const [count,setCount]=useState(1);
    const setNameData=()=>{
        setCount(count+1)
        setName(name +count);  
    }
    const abc=()=>{
        setTest(test+1);
        //console.log("abc");
    }

  useEffect(()=>{
    console.log("Hello");
  },[name,test])
  return (
    <div>
        <p>{name}</p>
        <button onClick={setNameData}>Change Name </button>
        <button onClick={abc}>Test </button>
    </div>
  )
}
