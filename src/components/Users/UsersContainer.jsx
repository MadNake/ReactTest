import { connect } from "react-redux";
import { follow, toggleIsFetching, setCurrentPage, setUsers, setUsersTotalCount, unfollow } from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";


// created container component

class UsersContainer extends React.Component {

	componentDidMount = () => {
		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true);

			usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
				.then(response => {
					this.props.toggleIsFetching(false);
					this.props.setUsers(response.items);
					this.props.setUsersTotalCount(response.totalCount);
				});
		}
	};
	// Processes that occur after rendering

	onPageChenged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.items);
			});
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
				onPageChenged={this.onPageChenged} />}
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
	}
};
// added state to Users component


export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching,
})(UsersContainer)
// connect "state" and "dispatchs" to UsersContainer to use there to render "Users" and use API requests