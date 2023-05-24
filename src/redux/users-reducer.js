const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"

let initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 0,
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
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			}
		}
		case SET_USERS_TOTAL_COUNT: {
			return {
				...state,
				totalUsersCount: action.count,
			}
		}
		default:
			return state
	}
}

export const followAC = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (count) => ({type : SET_USERS_TOTAL_COUNT, count})

export default usersReducer