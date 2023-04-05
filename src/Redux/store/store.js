import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import CreateBookReducer from "../reducers/CreateBookReducer";

const middlewares=[thunk];

const reducers=combineReducers({
    BookCreated:CreateBookReducer,
});

const store =createStore(reducers,composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
