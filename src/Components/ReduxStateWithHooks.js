import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';

function ReduxStateWithHooks(props) {
    const reduxCount=useSelector(state=>state.reduxCount);
    const dispatch=useDispatch();
    
  return (
    <div>
        <h2>Count is {reduxCount}</h2>
        <button onClick={()=>dispatch({type:"increment",payload:5})}>Count++</button> 
    </div>
  )
}

export default ReduxStateWithHooks;