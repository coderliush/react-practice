/*
 * @Description: 
 * @Author: liushuhao
 * @Date: 2021-01-13 15:11:57
 * @LastEditors: liushuhao
 */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = (state = { num: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        num: state.num + action.payload
      }
    default:
      return state
  }
}

// const store = createStore(reducer)

// ReactDOM.render(<Provider store={store}>
//   <App />
// </Provider>, document.getElementById('root'));
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


