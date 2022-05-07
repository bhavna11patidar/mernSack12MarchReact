import React, { Component } from 'react'

export default class ClassComponentPros extends Component {
    constructor(props){
        super(props);
        //console.log(props);
    }
  render() {
    return (
      <div>
        <h2>Props from Parent Props</h2>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
