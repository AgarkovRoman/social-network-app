import React from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 8604;
        }

        this.props.getProfile(userId)
    }

    render() {

        return (
            <div className={classes.Profile}>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


// export default connect(mapStateToProps,
//     {
//         // setUserProfile,
//         getProfile,
//     })(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)