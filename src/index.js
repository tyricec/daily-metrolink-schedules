import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import  { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import mlinkApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
  mlinkApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
