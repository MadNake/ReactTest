import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";

// created Functional/Presentation Component

let Users = (props) => {
	let followerTextButton = (u) => {
		return u.followed ?
			<button onClick={() => {
				followAPI.deleteFollow(u.id)
					.then(response => {
						if (response.resultCode === 0) {
							props.unfollow(u.id)
						};
					});
			}} className={s.button}>Unfollow</button> :
			<button onClick={() => {
				followAPI.createFollow(u.id)
					.then(response => {
						if (response.resultCode === 0) {
							props.follow(u.id)
						};
					});
			}} className={s.button}>Follow</button>
	};
	// created follow/unfollow button

	let usersElements = props.users.map((u) => (
		<li className={s.user__element} key={u.id}>
			<NavLink to={`/profile/${u.id}`}>
				<img className={s.profile__photo} src={u.photos.small !== null ? u.photos.small : userPhoto} alt="profile__photo" />
			</NavLink>
			{followerTextButton(u)}
			<div className={s.user__info}>
				<h3 className={s.user__name}>{u.name}</h3>
				<p className={s.user__statusbar}>{u.status}</p>
				<b className={s.user__location}>{"u.location.country"}<br />{"u.location.city"}</b>
			</div>
		</li>
	)
	);
	// created users elements

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	};
	// created an array of pages with the total number of users pages

	let curP = props.currentPage;
	let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
	let curPL = curP + 5;
	let slicedPages = pages.slice(curPF, curPL);
	// created pagination of users pages

	return (
		<section className={s.users}>
			<div className={s.pages}>
				{slicedPages.map(p => <span key={p} onClick={(e) => { props.onPageChenged(p) }} className={`${props.currentPage === p ? s.selectedPage : ""} ${s.pages__number}`}>{p}</span>)}
				<span>of {pagesCount}</span>
			</div>
			<h2 className={s.users__header}>Users</h2>
			<ul className={s.users__list}>
				{usersElements}
			</ul>
			<button className={`${s.button} ${s.button__showMore}`}>Show More</button>
		</section>
	)
}

export default Users