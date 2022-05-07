import React from 'react'
import { useParams } from 'react-router-dom';

export default function User() {
//  console.log(useParams());
  const {user_id, name}=useParams();
 // console.log(user_id);
  return (
    <div>User id {user_id} , Name is {name}</div>
  )
}
