import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './rootReducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(require('redux-immutable-state-invariant').default(), thunk, multi),
));


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
