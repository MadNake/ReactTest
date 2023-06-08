import React from "react"
import Header from "./Header"
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer"
import { useLocation,	useNavigate, useParams} from "react-router-dom";
import { authAPI, profileAPI } from "../../api/api";

class HeaderContainer extends React.Component {

	componentDidMount() {
		authAPI.authMe()
			.then(response => {
				if (response.resultCode === 0) {
					let { id, email, login } = response.data;
					profileAPI.getProfile(id)
						.then(response => {
							this.props.setAuthUserData(id, email, login, response);
						})
				}
			});
	};

	render() {
		return (
			<Header {...this.props} />
		)
	};


}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	userId: state.auth.userId,
	profile: state.auth.profile,
})


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

export default connect(mapStateToProps, { setAuthUserData })(withRouter(HeaderContainer))