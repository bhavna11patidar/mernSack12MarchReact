import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import FirstComponent from './Components/FirstComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';
import MyComponent from "./Components/myComponent";
import { Abc, Test } from './Components/myComponent';
import DataComponent from "./Components/DataComponent";
import ChangeOnKeyup from './Components/ChangeOnKeyup';
import DisplayArrayData from './Components/DisplayArrayData';
import CC1 from "./Components/ClassComponent1";
import FC1, { FunctionComponent2, FunctionComponent3 } from "./Components/FunctionComponent1";
import TestBootstrap from "./Components/TestBootstrap";

import UseEffectCom from "./Components/UseEffectCom";
*/
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
// import Header from './Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseEffectComp1 from "./Components/UseEffectComp1";
import CountryStateDropdown from "./Components/CountryStateDropdown";
import Header from "./Header";
import User from "./Components/User";
import AxiosPost from './Components/AxiosPost';
import AddPost from "./Components/AddPost";
import FirstContext from './Components/FirstContext';
import {FirstReducerContextProvider} from "./reducers/firstReducerContext";
import CounterReducer from "./Components/CounterReducer";
import ClassComponentWithState from './Components/ClassComponentWithState';
import PageNotFound from "./Components/PageNotFound";
import ClassComponentWithStateProps from "./Components/ClassComponentWithStateProps";

import store from "./store/Store";
import {Provider} from "react-redux";
import ReduxStateComp from "./Components/ReduxStateComp";
import ReduxStateWithHooks from "./Components/ReduxStateWithHooks";
import MultipleReducerRedux from './Components/MultipleReducerRedux';
function App() {
  return (
  <div>
      {/* <UseEffectComp1></UseEffectComp1>
      <CountryStateDropdown></CountryStateDropdown> */}
      {/* <Header></Header> */}
      {/* <FirstReducerContextProvider> */}
      <Provider store={store}>
             <Router>
      <div>
      <Header></Header>

        <hr />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/user/:user_id/:name" element={<User/>}></Route>
          <Route path="/axios-post" element={<AxiosPost/>}></Route>
          <Route path="/add-post" element={<AddPost/>}></Route>
          <Route path="/context-api" element={<FirstContext/>}></Route>
          <Route path="/context-api-reducer" element={<CounterReducer/>}></Route>
          <Route path="/class-comp" element={<ClassComponentWithState/>}></Route>
          <Route path="/class-comp1" element={<ClassComponentWithStateProps/>}></Route>
          <Route path="/redux-data" element={<ReduxStateComp/>}></Route>
          <Route path="/redux-hooks-data" element={<ReduxStateWithHooks/>}></Route>
          <Route path="/multiple-reducer-redux" element={<MultipleReducerRedux/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </div>
    </Router>
    {/* </FirstReducerContextProvider> */}
    </Provider>
  </div>
  )
}

export default App;
