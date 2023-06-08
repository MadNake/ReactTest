import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {

	componentDidMount() {
		let profileId = this.props.router.params.profileId;
		if (!profileId) {
			this.props.isAuth ? profileId = this.props.userId : profileId = 2;
		};
		profileAPI.getProfile(profileId)
			.then(response => {
				this.props.setUserProfile(response)
			});
	};

	componentDidUpdate(prevProps) {
		if (this.props.router.location !== prevProps.router.location) {
			let profileId = this.props.router.params.profileId;
			if (!profileId) {
				this.props.isAuth ? profileId = this.props.userId : profileId = 2
			};
			profileAPI.getProfile(profileId)
				.then(response => {
					this.props.setUserProfile(response)
				});
		}
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		);
	};
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
	userId: state.auth.userId,
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))