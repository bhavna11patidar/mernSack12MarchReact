export const initialState={
    count:0,
    resetCount:0,
}


const FirstReduce=(state, action)=>{
    switch(action.type){
        case "increment":
            return {...state, count:state.count+action.payload}
        case "decrement":
            return {...state, count:state.count-1}
        case "reset":
            return {...state, resetCount:0}
        default:
            return state;
    }
}

export default FirstReduce;