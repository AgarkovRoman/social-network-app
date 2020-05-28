import React from 'react';
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";


function App(props) {
  return (
        <div className={classes.appWrapper}>
          <Header/>
          <Navigation/>

          <Route path='/dialogs'
                 render={ () => <Dialogs
                     state={props.state.dialogsPage}
                     dispatch={props.dispatch}
                     />}/>
          <Route path='/profile'
                 render={ () => <Profile
                     state={props.state.profilePage}
                     dispatch={props.dispatch}
                 />}/>
        </div>
  );
}

export default App;
