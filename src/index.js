import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";


let rerenderEntireTree = (state) => {
    debugger
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    // state={store.getState()} //42. my version
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree); //42. my version


store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();