import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import CreateBookReducer from "../reducers/BookReducer";
import LoginReducer from '../reducers/LoginReducer';
import SignUpReducer from "../reducers/SignUpReducer";
const middlewares = [thunk];

const reducers = combineReducers({
  BookReducers: CreateBookReducer,
  Login: LoginReducer,
  Signup:SignUpReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;