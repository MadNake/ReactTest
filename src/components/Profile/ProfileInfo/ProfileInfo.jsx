import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
	return (
		<div className={s.profileInfo__wrapper}>
			<img className={s.profile__image} src='https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg' alt='main-img'></img>
			<h1 className={s.profile__name}>Main Name</h1>
			<h2 className={s.profile__description}>ava + description</h2>
		</div>
	)
}

export default ProfileInfo