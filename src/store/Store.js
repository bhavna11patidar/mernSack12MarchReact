import { createStore } from 'redux'
import SecondReducer from "./../reducers/SecondReducer";

const store=createStore(SecondReducer);
export default store;