 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import home from './Main_Code/home';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; 
import { Provider } from 'react-redux'
// // STORE -> GLOBALIZED STATE



// // ACTION INCREMENT 
// const increment =() =>{
//   return{
//     type: 'INCREMENT'
//   }
// }

// const decrement =() =>{
//   return{
//     type: 'DECREMENT'
//   }
// }


// //REDUCER
// const counter =(state=0,action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       return state+1;
//     case "DECREMENT":
//       return state-1;
//   }
// }
// let store=createStore(counter); // update in store
 
// // display it in the console
// store.subscribe(()=> console.log(store.getState()));

// // DISPATCH
// store.dispatch(increment());

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// )

ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
