import React, { Component } from 'react'
import ClassCompProps from "./ClassCompProps"
import HandleFormDataClassComp from "./HandleFormDataClassComp";
export default class ClassComponentWithStateProps extends Component {
 
    constructor(props){
        super(props);
        this.state={name:"Bhavna", tech:"Js",gender:"female"};
    }
    changeName=()=>{
        //console.log("Change name")
        this.setState({name:"Lukman", gender:"male"});
    }
    changeNameWithPara(n, g){
        this.setState({name:n, gender:g});
    }
    changeNameWithBindFun(n,g){
        this.setState({name:n, gender:g});
    }
  render() {
    const {name,gender,tech}=this.state;
    return (
      <div>
          {/* <ClassCompProps my_name="Bhavna"></ClassCompProps> */}
        {/* <h1>Hello {this.state.name} , Tech is {this.state.tech}, Gender is {this.state.gender}</h1>
        <h2>Hello {name}, {tech}, {gender}</h2>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={(e)=>this.changeNameWithPara("Madhuri","female", e)}>Change Name With Param</button>
        <button onClick={this.changeNameWithBindFun.bind(this, "Harsh","Male")}>Change name On Bind</button>
       */}
       <HandleFormDataClassComp></HandleFormDataClassComp>
        </div>
    )
  }
}
