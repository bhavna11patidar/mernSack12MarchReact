import React, { useState, useCallback } from 'react'

export default function ChangeOnKeyup() {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    let setEmailValueFronInput=(e)=>{
            setEmail(e.target.value);
    }

    function setPasswprdValueFromInput(){

    }
    
  return (
    <div>
        <input type="text" name="name" placeholder='enter name'  onInput={e=>setName(e.target.value)}/>
        <h1>{name}</h1>
        <br></br>
        <input type="text" name="email" placeholder='enter email' value={email} onInput={setEmailValueFronInput}/>
        <h1>Email Id Is : {email}</h1>
        <input type="text" name="password" placeholder='enter pass' value={password} onInput={setPasswprdValueFromInput}/>
        <h1>Email Id Is : {password}</h1>
    </div>
  )
}
