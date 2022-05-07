import React, { Component } from 'react'

export default class ClassCompProps extends Component {

constructor(props){
    super(props);
}
  render() {
    return (
      <div>
          <h2>Hello {this.props.my_name} </h2>
      </div>

    )
  }
}
