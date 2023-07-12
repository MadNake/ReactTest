import { authAPI } from "../api/api";
// import { getProfile } from "./profile-reducer";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
	userId: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			};
		}
		default:
			return state
	}
}


export const setAuthUserData = (userId, email, login, isAuth) => (
	{ type: SET_USER_DATA, data: { userId, email, login, isAuth }}
)



export const authMe = () => (dispatch) => {
	return authAPI.authMe()
		.then(response => {
			if (response.resultCode === 0) {
				let { id, email, login } = response.data;
						dispatch(setAuthUserData(id, email, login, true, response));
			}
		});
}

export const login = (loginData, setStatus) => (dispatch, getState) => {
	authAPI.login(loginData)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(authMe())
				// .then(() => {
				// 	const userId = getUserId(getState()); // Get userId using a selector
				// 	dispatch(getProfile(userId))
				// })
			} else {
				let errorMessage = response.messages.length > 0 ? response.messages : "Some error"
				setStatus({ error: errorMessage })
			}
		})
}

export const logout = () => dispatch => {
	authAPI.logout()
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}
		})
}

// selectors

export const getUserId = state => state.auth.userId;


export default authReducer