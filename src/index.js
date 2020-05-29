import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

// let rerenderEntireTree = () => {
//     debugger
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App
                // state={state}

                // // state={store.getState()} //42. my version
                // dispatch={store.dispatch.bind(store)}
                // store={store}
                />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// rerenderEntireTree();

// // store.subscribe(rerenderEntireTree); //42. my version


// // store.subscribe(() => {
// //     let state = store.getState();
// //     rerenderEntireTree(state);
// // })

// store.subscribe(() => {
//     rerenderEntireTree();
// })



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();