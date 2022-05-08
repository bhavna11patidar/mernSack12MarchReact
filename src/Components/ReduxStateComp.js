import React from 'react'
import { connect } from 'react-redux'
function ReduxStateComp(props) {
  return (
    <div>
        <h2>Count is {props.reduxCount}</h2>
        <button onClick={props.incrementCount}>Count++</button>
    </div>
  )
}


const mapStateToProps=(state)=>{
    return {reduxCount:state.reduxCount};
}

const mapDispatchToProps=(dispatch)=>{
    return { 
        incrementCount:()=>dispatch({type:"increment",payload:5})
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ReduxStateComp);
//export default ReduxStateComp;