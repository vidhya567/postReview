import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/index";

// Configure Firebase.
var config = {
    apiKey: "AIzaSyA9H7MjXZ_Rje7wdr0-jtml-U0RH8ujt4Y",
    authDomain: "lively-math-170005.firebaseapp.com",
    databaseURL: "https://lively-math-170005.firebaseio.com",
    projectId: "lively-math-170005",
    storageBucket: "lively-math-170005.appspot.com",
    messagingSenderId: "658356984338"
};
firebase.initializeApp(config);



const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
    const state = store.getState();
})
// listenForAuthChange();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
// Dont Want to use Service Worker Now
// registerServiceWorker();
