import React from 'react';
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  debugger
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navigation />

      <Route path='/dialogs'
        render={() => <DialogsContainer
        //state={props.state.dialogsPage}
        // dispatch={props.dispatch}

        // store={props.store}
        />} />
      <Route path='/profile'
        render={() => <Profile
        // state={props.state.profilePage}
        // dispatch={props.dispatch}

        // store={props.store}
        />} />
    </div>
  );
}

export default App;
