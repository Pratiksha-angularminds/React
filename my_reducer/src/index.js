import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import App from './App';
import {Provider} from 'react-redux'
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
  