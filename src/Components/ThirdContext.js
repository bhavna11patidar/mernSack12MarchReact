import React, {useContext} from 'react'
import userContext from "./../contexts/userContext"
export default function ThirdContext() {
const {username,setUsername,changeUsername}=useContext(userContext);
  return (
    <div>
        <h2>Third Context</h2>
        <p>Username : {username}</p>
        <button onClick={changeUsername}>Change username from Third Component</button>
        <button onClick={()=>setUsername("Lukman")}>Change username from Third Component</button>
    </div>
  )
}
