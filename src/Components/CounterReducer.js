import React from 'react'
import {useFirstReducerContext} from "./../reducers/firstReducerContext";

export default function CounterReducer() {
  const [data,dispatch]=useFirstReducerContext();  
  return (
    <div>
        <h2>Count is {data.count}</h2>
        <button onClick={()=>dispatch({type:'increment', payload:5})}>Count +5</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Count -</button>
    </div>
    
  )
}
