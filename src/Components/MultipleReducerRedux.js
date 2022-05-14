import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';

function MultipleReducerRedux(props) {
    const secondReducerData=useSelector(state=>state.second);
    const thirdReducerData=useSelector(state=>state.third);
    const dispatch=useDispatch();
    
  return (
    <div>
        <h2>Count is {secondReducerData.reduxCount}</h2>
        <h2>Name is {thirdReducerData.name}</h2>
        <h2>Count From Third Reducer is {thirdReducerData.reduxCount}</h2>
        <button onClick={()=>dispatch({type:"increment",payload:5})}>Count++</button>
        <button onClick={()=>dispatch({type:"increment1",payload:5})}>Third Reducer Count++</button>
        <button onClick={()=>dispatch({type:"changeName",payload:"Lukman"})}>Change Name</button> 
    </div>
  )
}

export default MultipleReducerRedux;