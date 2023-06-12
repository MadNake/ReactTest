import React from "react"
import Header from "./Header"
import { connect } from "react-redux";
import { authMe } from "../../redux/auth-reducer"
import { useLocation,	useNavigate, useParams} from "react-router-dom";

class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.authMe();
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

export default connect(mapStateToProps, { authMe })(withRouter(HeaderContainer))