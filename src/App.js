import React from 'react';
import classes from './App.module.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation"
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Switch } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login'
function App(props) {

  return (
    <div className={classes.appWrapper}>
      <HeaderContainer />
      <Navigation />
      <Switch>
        <Route path='/dialogs'
          render={() => <DialogsContainer />}
        />
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />}
        />
        <Route path='/users'
          render={() => <UsersContainer />}
        />
        <Route path='/login'
          render={() => <Login />}
        />
      </Switch>
    </div>
  );
}

export default App;
