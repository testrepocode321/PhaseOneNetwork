import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store'


ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(function(){
    ReactDOM.render(<App />, document.getElementById('root'));
});

serviceWorker.unregister();
