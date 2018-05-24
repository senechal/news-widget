import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsWidget from './components/NewsWidget';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewsWidget />, document.getElementById('root'));
registerServiceWorker();
