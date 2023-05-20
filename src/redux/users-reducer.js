const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"

let initialState = {
	usersData: [
		// {
		// 	id: 1, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		// 	followed: true, name: "Dmitry K.", statusbar: "I am looking for a job right now", location: { city: "Minsk", country: "Belarus" },
		// },
		// {
		// 	id: 2, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		// 	followed: true, name: "Svetlana D.", statusbar: "I am so busy", location: { city: "Kyiv", country: "Ukraine" },
		// },
		// {
		// 	id: 3, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		// 	followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Moscow", country: "Russia" },
		// },
		// {
		// 	id: 4, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		// 	followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Kyiv", country: "Ukraine" },
		// },
		// {
		// 	id: 5, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		// 	followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Berlin", country: "Germany" },
		// },
		// {
		// 	id: 6, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		// 	followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Paris", country: "France" },
		// },
	]
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW_USER: {
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				}),
			}
		}
		case UNFOLLOW_USER: {
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				}),
			}
		}
		case SET_USERS: {
			return {
				...state,
				usersData: action.users,
			}
		}
		default:
			return state
	}
}

export const followAC = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer