export const initialState={
    reduxCount:0,
    resetreduxCount:0,
}


const SecondReducer=(state=initialState, action)=>{
    switch(action.type){
        case "increment":
            return {...state, reduxCount:state.reduxCount+action.payload}
        case "decrement":
            return {...state, reduxCount:state.reduxCount-1}
        case "reset":
            return {...state, resetreduxCount:0}
        default:
            return state;
    }
}

export default SecondReducer;