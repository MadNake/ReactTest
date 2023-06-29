import { authMe } from "./auth-reducer";
import { getProfile } from "./profile-reducer";
import { getUserId } from './auth-reducer';


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				initialized : true,
			};
		}
		default:
			return state
	}
}


export const initializedSuccess = () => (
	{ type: INITIALIZED_SUCCESS }
)



export const initializeApp = () => async (dispatch, getState) => {
	try {
		await dispatch(authMe()); // Waiting for authMe() to execute
		const userId = getUserId(getState()); // Get userId using a selector

		userId && await dispatch(getProfile(userId)); // Waiting for getProfile(id)

		dispatch(initializedSuccess()); // Call initializedSuccess() after both promises are fulfilled
	} catch (error) {

	}
}




export default appReducer