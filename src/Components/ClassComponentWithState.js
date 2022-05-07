import React, { Component } from 'react'
import ClassComponentPros from "./ClassComponentPros";
export default class ClassComponentWithState extends Component {
constructor(props){
    super(props);
    this.state={name:"Madhuri", gender:'female'};

}
changeName=()=>{
    
}
  render() {
    const {name,gender}=this.state;
    return (
      <div>
          <p>My Name is {this.state.name} && Gender is {this.state.gender}</p>
          <p>Name: {name} && Gender is {gender}</p>
          <ClassComponentPros title="hello World"></ClassComponentPros>

          <button >Change Name</button>
      </div>
    )
  }
}
