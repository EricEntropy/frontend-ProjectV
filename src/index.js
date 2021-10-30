import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css"
import RootReducer from './reducers/RootReducer';


const store = createStore(RootReducer, applyMiddleware(thunk));

const token = localStorage.getItem('jwt');
const username = localStorage.getItem('username');
const user_id = localStorage.getItem('user_id');
const user = {
  username: username,
  user_id: user_id  
}

if(token && username && user_id){
  store.dispatch({type: "PERSIST_USER", user: user})
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

