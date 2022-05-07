import React, { useState } from 'react';
import {addPostData} from "./../helpers/helper";

export default function AddPost() {
 const [formData, setFormData]=useState({user_id:"", title:"",body:""}); 
 const [msg, setMsg]=useState("");
 const postData=(e)=>{
    //console.log(e.target.name + " "+e.target.value);
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });
 }
 const addPosts=()=>{
    //console.log(formData);
    let url="https://jsonplaceholder.typicode.com/posts";
    addPostData(url,formData, function(res){
        console.log(res.status);
       if(res.status==201){
            setMsg("Post Added Successfully");
           // console.log(msg)
       }
    });
 }
  return (
    <div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 '>
                <h1 className="text-primary text-center" >Add Post</h1>
                <p className="text-success">{msg}</p>
                <div className='form-group'>
                    <label>User Id</label>
                    <input type="id" name="user_id" className='form-control' onInput={postData}/>
                </div>
                <div className='form-group'>
                    <label>Title</label>
                    <input type="text" name="title" className='form-control' onChange={postData}/>
                </div>
                <div className='form-group'>
                    <label>Body</label>
                    <textarea name="body" className='form-control' onChange={postData}></textarea>
                </div>
                <div className='text-center mt-3'>
                    <button className="btn btn-info" onClick={addPosts}>Submit</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
