const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"

let initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1,
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