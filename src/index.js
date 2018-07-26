import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/store.js';

// ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
