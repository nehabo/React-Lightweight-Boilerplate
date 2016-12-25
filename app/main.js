import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducer, createStore } from 'redux';
import Search from './search';

const store = createStore();

ReactDOM.render(<Search/>, document.getElementById('application'));
