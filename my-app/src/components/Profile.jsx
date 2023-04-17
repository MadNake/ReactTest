import s from "../style/Profile.module.css"

const Profile = () => {
	return (
		<section className={s.profile}>
			<img className={s.profile__image} src='https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg' alt='main-img'></img>
			<h1 className={s.profile__name}>Main Content Name</h1>
			<h2 className={s.profile__description}>description</h2>
			<p>new post</p>
		</section>
	)
}

export default Profile