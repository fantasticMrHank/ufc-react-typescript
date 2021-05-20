import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import * as serviceWorker from './serviceWorker'

import App from './App'

import { Provider } from 'react-redux';
import store from './store/store';


import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'


require('dotenv').config()

// redux toolkit
//import { Provider } from 'react-redux'
//import store from './redux/store'

// store.subscribe(() => {
//     console.log('Redux toolkit state: ' + store.getState())
// })


const routing = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister()
