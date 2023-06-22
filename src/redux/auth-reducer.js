import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
	userId: null,
	email: null,
	login: null,
	profile: null,
	isFetching: false,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				profile: action.profile,
			};
		}
		default:
			return state
	}
}


export const setAuthUserData = (userId, email, login, isAuth, profile) => (
	{ type: SET_USER_DATA, data: {userId, email, login, isAuth}, profile }
)



export const authMe = () => {
	return (dispatch) => {
		authAPI.authMe()
		.then(response => {
			if (response.resultCode === 0) {
				let { id, email, login } = response.data;
				profileAPI.getProfile(id)
					.then(response => {
						dispatch(setAuthUserData(id, email, login, true, response));
					})
			}
		});

	}
}

export const login = (email, password, rememberMe = false) => dispatch => {
	authAPI.login(email, password, rememberMe)
	.then(response => {
		if (response.resultCode === 0) {
			dispatch(authMe())
		}
	})
}

export const logout = () => dispatch => {
	authAPI.logout()
	.then(response => {
		if (response.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false, null))
		}
	})
}

export default authReducer