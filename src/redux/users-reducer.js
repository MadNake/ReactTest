import { usersAPI } from "../api/api"

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};
// created an "initial state" to pass it to the "reducer" and initial rendering

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
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			}
		}
		default:
			return state
	}
};
// Created ways to manage the state

export const followSuccess = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (count) => ({ type: SET_USERS_TOTAL_COUNT, count })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
// Created "action creators" to pass conditions to the "reducer"

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then(response => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(response.items));
				dispatch(setUsersTotalCount(response.totalCount));
			});
	}
};

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.follow(userId)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(unfollowSuccess(userId))
				};
				dispatch(toggleFollowingProgress(false, userId));
			});
	}
};

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.unfollow(userId)
			.then(response => {
				if (response.resultCode === 0) {
					dispatch(followSuccess(userId))
				};
				dispatch(toggleFollowingProgress(false, userId));
			});
	}
};
// Created thunk creators

export default usersReducer