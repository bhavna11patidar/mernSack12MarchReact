import React, {useState} from 'react';
import SecondContext from './SecondContext';
import userContext from "./../contexts/userContext"
import ThirdContext from './ThirdContext';


export default function FirstContext() {
  const [username,setUsername]=useState("Hiral");
  const [userList,setUserList]=useState([]);
  const changeUsername=()=>{
      setUsername("Bhavna");
  }
  

  return (
    <div>
        <h1>First Component</h1>
        <p>USername : {username}</p>
        <button onClick={changeUsername}>Change username</button>
        <userContext.Provider value={{username, setUsername,changeUsername}} >
             <SecondContext></SecondContext>
             <ThirdContext></ThirdContext>
             
        </userContext.Provider>
    </div>
  )
}
