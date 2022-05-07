import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {getPostData} from "./../helpers/helper";

export default function AxiosPost() {
 const [posts, setPosts]=useState([]);
 const [users, setUsers]=useState([]);
 
 useEffect(()=>{
    /*axios.get("https://jsonplaceholder.typicode.com/posts111")
    .then((response)=>{
        console.log(response);
        setPosts(response.data);
    })
    .catch(err=>{
        console.log(err);
    })*/

 },[])
 const getApiData=()=>{
    let url="https://jsonplaceholder.typicode.com/posts";
    getPostData(url, function(res){
       // console.log(res);
       setUsers([]);
        setPosts(res.data)
    });
 }

 const getUserApiData=()=>{
    let url="https://jsonplaceholder.typicode.com/users";
    getPostData(url, function(res){
       // console.log(res);
        setUsers(res.data)
        setPosts([]);
    });
 }

  return (
    <div className="container">
        <h1>Json Data</h1>
        <button onClick={getApiData}>Get Data</button>
        <button onClick={getUserApiData}>Get User Data</button>
       {posts.length>0 ? (
        <table className='table'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((el,index)=>{
                    return( 
                        <tr key={index}>
                            <td>{el.userId}</td>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>{el.body}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        ) : ("") }

{users.length>0 ? (
        <table className='table'>
            <thead>
                <tr>
                    <td>Id</td>
                    <th>Name</th>
                    <th>Email</th>
                    <th>username</th>
                    <th>Phone No.</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((el,index)=>{
                    return( 
                        <tr key={index}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.username}</td>
                            <td>{el.phone}</td>
                            <td>{el.company.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        ) : ("") }
    </div>
  )
}

