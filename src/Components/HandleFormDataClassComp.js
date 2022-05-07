import React, { Component } from 'react'

export default class HandleFormDataClassComp extends Component {
    constructor(props){
        super(props);
        this.state={myname:"", email:"", tech:""};
    }
    handleFormData=(e)=>{
       // console.log(e.target.name);
       this.setState({[e.target.name]:e.target.value});
    }
    formData=()=>{
        console.log(this.state);
    }
  render() {
    return (
    <div className='container'>
        <div className='row justify-content-center'>
      <div className="col-md-6">
          <label>Name</label>
          {/* <input type="text" className="form-control" name="myname" placeholder='Enter name' onInput={(e)=>this.setState({myname:e.target.value})}/> */}
          <input type="text" className="form-control" name="myname" placeholder='Enter name' onInput={(e)=>this.handleFormData(e)}/> 
          <input type="text" className="form-control" name="email" placeholder='Enter Email' onInput={(e)=>this.handleFormData(e)}/> 
          <input type="text" className="form-control" name="tech" placeholder='Enter Tech' onInput={(e)=>this.handleFormData(e)}/> 
         <button type="button" className="btn btn-success" onClick={this.formData}>Submit</button>
     </div>
      </div>
    </div>
    )
  }
}
