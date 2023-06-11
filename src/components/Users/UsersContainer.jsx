import { connect } from "react-redux";
import { getUsers, follow,  setCurrentPage,  unfollow, toggleFollowingProgress } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

// created container component

class UsersContainer extends React.Component {

	componentDidMount = () => {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};
	// Processes that occur after rendering

	onPageChenged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	};
	// Processes that occur after a page change

	render() {
		// return Functional/Presentation Component with props
		return <>
			{this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				currentPage={this.props.currentPage}
				onPageChenged={this.onPageChenged}
				followingInProgress={this.props.followingInProgress}/>}
		</>
	};
};
// created class component for work with API and life cycle

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
};
// added state to Users component


export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	getUsers,
})(UsersContainer)
// connect "state" and "dispatchs" to UsersContainer to use there to render "Users" and use API requests