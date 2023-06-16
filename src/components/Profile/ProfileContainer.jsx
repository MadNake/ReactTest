import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let profileId = this.props.router.params.profileId;
		if (!profileId) {
			this.props.isAuth ? profileId = this.props.userId : profileId = 2;
		};
		this.props.getProfile(profileId)
		this.props.getStatus(profileId)
	};

	componentDidUpdate(prevProps) {
		if (this.props.router.location !== prevProps.router.location) {
			let profileId = this.props.router.params.profileId;
			if (!profileId) {
				this.props.isAuth ? profileId = this.props.userId : profileId = 2
			};
			this.props.getProfile(profileId)
			this.props.getStatus(profileId)
		}
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
		);
	};
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	userId: state.auth.userId,
	status: state.profilePage.status,
});

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)