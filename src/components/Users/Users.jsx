import axios from "axios";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import React from "react";

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	};

	onPageChenged(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {

		let followerTextButton = (u) => {
			return u.followed ?
				<button onClick={() => this.props.unfollow(u.id)} className={s.button}>Unfollow</button> :
				<button onClick={() => this.props.follow(u.id)} className={s.button}>Follow</button>
		};

		let usersElements = this.props.users.map((u) => (
			<li className={s.user__element} key={u.id}>
				<img className={s.profile__photo} src={u.photos.small !== null ? u.photos.small : userPhoto} alt="profile__photo" />
				{followerTextButton(u)}
				<div className={s.user__info}>
					<h3 className={s.user__name}>{u.name}</h3>
					<p className={s.user__statusbar}>{u.status}</p>
					<b className={s.user__location}>{"u.location.country"}<br />{"u.location.city"}</b>
				</div>
			</li>
		)
		);

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		};

		let curP = this.props.currentPage;
		let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
		let curPL = curP + 5;
		let slicedPages = pages.slice(curPF, curPL);

		return (
			<section className={s.users}>
				<div className={s.pages}>
					{slicedPages.map(p => <span onClick={(e) => { this.onPageChenged(p) }} className={`${this.props.currentPage === p ? s.selectedPage : ""} ${s.pages__number}`}>{p}</span>)}
					<span>of {pagesCount}</span>
				</div>
				<h2 className={s.users__header}>Users</h2>
				<ul className={s.users__list}>
					{usersElements}
				</ul>
				<button className={`${s.button} ${s.button__showMore}`}>Show More</button>
			</section>
		)
	};
}

export default Users