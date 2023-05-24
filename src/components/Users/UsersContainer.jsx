import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

	componentDidMount = () => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	};
	// Processes that occur after rendering

	onPageChenged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	};
	//Processes that occur after a page change

	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			users={this.props.users}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			currentPage={this.props.currentPage}
			onPageChenged={this.onPageChenged}/>
	};
};
// created class component for work with API and life cycle

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
};
// added state to Users component

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: (count) => {
			dispatch(setUsersTotalCountAC(count))
		},
	}
};
//added dispatchs to Users component

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
//connect "state" and "dispatchs" to UsersContainer to use there to render "Users" and use API requests