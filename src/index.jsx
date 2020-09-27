import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/main';
import rootReducer from './reducers';
import './style/main.scss';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
