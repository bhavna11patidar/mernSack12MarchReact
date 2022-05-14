export const initialState={
    reduxCount:0,
    name:"Bhavna",
    age:30,
}


const ThirdReducer=(state=initialState, action)=>{
    switch(action.type){
        case "increment1":
            return {...state, reduxCount:state.reduxCount+action.payload}
        case "changeName":
            return {...state, name:action.payload}
        case "changeAge":
            return {...state, age:action.payload}
        default:
            return state;
    }
}

export default ThirdReducer;