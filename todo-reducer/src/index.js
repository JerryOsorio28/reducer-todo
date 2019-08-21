import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import createStore from redux
import { createStore } from 'redux';

//Import Reducer
import { Reducer } from './reducers/Reducer';

//import Provider from react-redux
import { Provider } from 'react-redux';


const store = createStore(Reducer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

