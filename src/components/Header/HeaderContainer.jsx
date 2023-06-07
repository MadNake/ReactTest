import React from "react"
import Header from "./Header"
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer"
import { useLocation,	useNavigate, useParams} from "react-router-dom";

class HeaderContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data;
					axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
						.then(response => {
							this.props.setAuthUserData(id, email, login, response.data);
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