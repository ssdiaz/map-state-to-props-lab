import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from "redux";  // add imports
import { Provider } from "react-redux"; // add imports
import manageUsers from './reducers/manageUsers'

const store = createStore(    //add code
  manageUsers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(          //add code
  <Provider store={store}>      
      <App />
  </Provider> ,
  document.getElementById('root')
);
