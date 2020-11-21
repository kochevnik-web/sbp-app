import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from "./context";
import App from './Components/App/App';

ReactDOM.render(
  <ContextProvider>
      <App />
  </ContextProvider>, 
document.getElementById('root'));