import React, {useState,useEffect} from 'react'

export default function UseEffectCom() {

const [name, setName]=useState("Bhavna");

const [count, setCounter]=useState(1);
const changeName=()=>{
    setName("Lukman"+count);
}
useEffect(()=>{
    setCounter(count+1);
    console.log("Hello, Use Effect!!!");
},[name])
  return (
    <div>
    <h1>My name is {name}</h1>
    <button onClick={changeName}>Change Name</button>
    </div>
  )
}
