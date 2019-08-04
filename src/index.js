import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Counter from "./Counter";
import Layout from "./Layout";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import "./index.css";

// const initialState = {
//   count: 0
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1
//       };
//     case "RESET":
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer, applyMiddleware(thunk));

// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null
// };
// const reducer = (state = { initialState }, action) => {
//   switch (action.type) {
//     case "FETCH_USERS_START": {
//       return { ...state, fetching: true };
//       break;
//     }
//     case "FETCH_USERS_ERROR": {
//       return { ...state, fetching: false, error: action.payload };
//       break;
//     }
//     case "RECEIVE_USERS": {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         users: action.payload
//       };
//       break;
//     }
//   }
//   return state;
// };

// const middleware = applyMiddleware(thunk);
// const store = createStore(reducer, middleware);

// store.dispatch(dispatch => {
//   dispatch({ type: "FETCH_USERS_START" });
//   axios
//     .get("http://rest.learncode.academy/api/wstern/users")
//     .then(response => {
//       dispatch({ type: "RECEIVE_USERS", payload: response.data });
//     })
//     .catch(err => {
//       dispatch({ type: "FETCH_USERS_ERROR", payload: err });
//     });
// });

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {/* <Counter /> */}
    <Layout />
  </Provider>,
  document.getElementById("root")
);
