import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
	profile: null,
	postsData: [
		{ id: 1, message: "this text1", likesCount: 32, name: "Name1Tos" },
		{ id: 2, message: "this text2", likesCount: 24, name: "Name235hs" },
		{ id: 3, message: "this tex22", likesCount: 14, name: "Name2fagg" },
	],
	newPostText: "",
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: "5",
				message: state.newPostText,
				likesCount: 0,
				name: "Name1Tos",
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: "",
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state
	}
}

export const addPostActionCreator = () => (
	{ type: ADD_POST }
)

export const updateNewPostTextActionCreator = (text) => (
	{ type: UPDATE_NEW_POST_TEXT, newText: text }
)

export const setUserProfile = (profile) => (
	{ type: SET_USER_PROFILE, profile: profile }
)

export const setStatus = (status) => (
	{ type: SET_STATUS, status }
)

export const getProfile = (profileId) => {
	return (dispatch) => {
		profileAPI.getProfile(profileId)
			.then(response => {
				dispatch(setUserProfile(response));
			});
	}
}

export const getStatus = (profileId) => {
	return (dispatch) => {
		profileAPI.getStatus(profileId)
			.then(response => {
				dispatch(setStatus(response.data))
			})
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status))
				}
			})
	}
}

export default profileReducer