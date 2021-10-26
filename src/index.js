import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer"

const store = createStore(RootReducer, applyMiddleware(thunk));

const token = localStorage.getItem('jwt');
const user = localStorage.getItem('user_id');

if(token && user){
  store.dispatch({type: "PERSIST_USER"})
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

