import 'normalize-stylus';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './main.styl';
import App from './containers';

let cv =  (state=[], action) => {
 return state;
};

let store = createStore(cv);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
