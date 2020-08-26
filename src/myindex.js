import App from './App';
import {BrowserRouter,Route} from 'react-router-dom'

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
registerServiceWorker();

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer';
import store from './store/state';
const store=createStore(reducer,state);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);