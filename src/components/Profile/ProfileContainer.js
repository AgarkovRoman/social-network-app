import React from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 8604;
        }

        this.props.getProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <div className={classes.Profile}>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps,
    {
        // setUserProfile,
        getProfile,
    })(WithUrlDataContainerComponent);
