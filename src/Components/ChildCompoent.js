import React from 'react'

export default function ChildCompoent(props) {
 console.log(props);
  return (
    <div><h1>Title from DataComponent is {props.title}</h1></div>
  )
}
