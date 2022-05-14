/*import { createStore } from 'redux'
import SecondReducer from "./../reducers/SecondReducer";

const store=createStore(SecondReducer);
export default store;
*/

import { createStore , combineReducers} from 'redux'
import SecondReducer from "./../reducers/SecondReducer";
import ThirdReducer from '../reducers/ThirdReducer';
const combined=combineReducers({second:SecondReducer, third:ThirdReducer});

const store=createStore(combined);
export default store;