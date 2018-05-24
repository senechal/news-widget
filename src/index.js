import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import NewsWidget from './components/NewsWidget';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <NewsWidget />
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
