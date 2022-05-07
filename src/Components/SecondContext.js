import React, {useContext} from 'react'
import userContext from "./../contexts/userContext"
export default function SecondContext() {
const {username}=useContext(userContext);
  return (
    <div>
        <h2>Second Context</h2>
        <p>Username : {username}</p>
    </div>
  )
}
