import React from 'react'

export default function FunctionComponent1(props) {
  return (
    <div>FunctionComponent1 : props: - {props.title} / Name is : {props.myName}</div>
  )
}


export  function FunctionComponent2() {
    return (
      <div>FunctionComponent 2</div>
    )
  }

  export  function FunctionComponent3() {
    return (
      <div>FunctionComponent 3</div>
    )
  }