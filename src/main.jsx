/********************************
 in tolkiens literature, 'galad' means light.
 **********************************/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./StateManagement/Store.js";
import {newUser} from "./services/apiFirebase.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
