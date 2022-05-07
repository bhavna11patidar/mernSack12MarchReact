import {createContext, useContext, useReducer} from "react";
import  FirstReduce,{initialState} from "./FirstReducer";
const FirstReducerContext=createContext();
export const useFirstReducerContext=()=>useContext(FirstReducerContext);

export const FirstReducerContextProvider=({children})=>{
    const useFirstReducerContextState=useReducer(FirstReduce, initialState);
    return (
        <FirstReducerContext.Provider value={[...useFirstReducerContextState]}>
            {children}
        </FirstReducerContext.Provider>
    )
}