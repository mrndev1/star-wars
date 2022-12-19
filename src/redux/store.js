import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sw_reducer from "./reducers/starwars";


const reducers = combineReducers({ sw_reducer });
const store = createStore(reducers , applyMiddleware(thunk));
export default store;