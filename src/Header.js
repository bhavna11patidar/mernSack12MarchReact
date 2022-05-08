import { __esModule } from '@testing-library/jest-dom/dist/matchers';
import React, {useState} from 'react'
import {Link} from "react-router-dom";
export default function Header() {
  const [userData, setUserData]=useState([
    {id:120, name:"Bhavna", email:"bhavna@gmail.com"},
    {id:111, name:"Lukman", email:"lukman@gmail.com"},
    {id:200, name:"xyz", email:"xyz@gmail.com"},
    {id:128, name:"xys", email:"xyz@gmail.com"}
  ])
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {/* <li>
            <Link to="/user/12">Users 12</Link>
          </li>
          <li>
            <Link to="/user/100">Users 100</Link>
          </li>
          <li>
            <Link to="/user/69">Users 69</Link>
          </li> */}
          {userData.map((el,index)=>{
            let url="/user/"+el.id+"/"+el.name;
            return (
              <li key={index}>
              <Link  to={url} >Users {el.id} </Link>
              </li>
            )
          })}
           <li>
            <Link to="/axios-post">Axios Post</Link>
          </li>
          <li>
            <Link to="/add-post">Axios Add Post</Link>
          </li>
          <li>
            <Link to="/context-api">Context Api</Link>
          </li>
          <li>
            <Link to="/context-api-reducer">Context Api with Reducer</Link>
          </li>
          <li>
            <Link to="/class-comp">Class Component With State</Link>
          </li>
          <li>
            <Link to="/class-comp1">Class Component With State New</Link>
          </li>
          <li>
            <Link to="/redux-data">Redux</Link>
          </li>
        </ul>
    </div>

  )
}
