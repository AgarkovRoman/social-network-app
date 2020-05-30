import React from 'react';
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Switch } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  debugger
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navigation />
      <Switch>
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
        <Route path='/users'
          render={() => <UsersContainer />}
        />
      </Switch>
    </div>
  );
}

export default App;
