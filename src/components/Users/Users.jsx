import s from "./Users.module.css"

const Users = (props) => {

	if (props.users.length === 0) {

		props.setUsers([
			{
				id: 1, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				followed: true, name: "Dmitry K.", statusbar: "I am looking for a job right now", location: { city: "Minsk", country: "Belarus" },
			},
			{
				id: 2, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				followed: true, name: "Svetlana D.", statusbar: "I am so busy", location: { city: "Kyiv", country: "Ukraine" },
			},
			{
				id: 3, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Moscow", country: "Russia" },
			},
			{
				id: 4, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Kyiv", country: "Ukraine" },
			},
			{
				id: 5, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Berlin", country: "Germany" },
			},
			{
				id: 6, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
				followed: false, name: "Sergei S.", statusbar: "I like footbal", location: { city: "Paris", country: "France" },
			},
		])
	}

	let followerTextButton = (u) => {
		return u.followed ?
			<button onClick={() => props.unfollow(u.id)} className={s.button}>Unfollow</button> :
			<button onClick={() => props.follow(u.id)} className={s.button}>Follow</button>
	};

	let usersElements = props.users.map((u) => {
		return (
			<li className={s.user__element} key={u.id}>
				<img className={s.profile__photo} src={u.photoURL} alt="profile__photo" />
				{followerTextButton(u)}
				<div className={s.user__info}>
					<h3 className={s.user__name}>{u.name}</h3>
					<p className={s.user__statusbar}>{u.statusbar}</p>
					<b className={s.user__location}>{u.location.country}<br />{u.location.city}</b>
				</div>
			</li>
		)
	})


	return (
		<section className={s.users}>
			<h2 className={s.users__header}>Users</h2>
			<ul className={s.users__list}>
				{usersElements}
			</ul>
			<button className={`${s.button} ${s.button__showMore}`}>Show More</button>
		</section>
	)
}

export default Users