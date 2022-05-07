import React, { useState } from 'react'

export default function DisplayArrayData() {
const [userList, setUserList]=useState(["Bhavna", "Lukman", "Madhuri", "Som"]);
const [stateColor, setStateColor]=useState("red");
const udateArray=()=>{
        //setUserList(["Mehul","varsha", "Hiral"]);
        setUserList([...userList, "Mehul", "Mohnish"])
        setStateColor("blue");
}  

const [userListObj,setUserListObj]=useState([{name:"Bhavna", tech:"React"}, {name:"Lukman", tech:"Js"}, {name:"Madhuri", tech:"Jquery"}])
return (
    <div>
        <ul>
        {
            userList.map((user,i)=>{
                return(
                    // <li key={i} className="red">{user}</li>
                    // <li key={i} style={{color:'red'}}>{user}</li>
                    <li key={i} style={{color:stateColor}}>{user}</li>
                )
            })
        }
        </ul>
        <button onClick={udateArray}>Update Array</button>
        <ul>
        {
            userListObj.map((user,i)=>{
                return(
                     <li key={i} className="red">Name: {user.name} && Tect: {user.tech}</li>
                )
            })
        }
        </ul>
    </div>
  )
}
