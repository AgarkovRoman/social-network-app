import React, { Component } from 'react';
import classes from './App.module.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Loader from './components/UI/Loader/Loader';


import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className={classes.appWrapper} >
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp