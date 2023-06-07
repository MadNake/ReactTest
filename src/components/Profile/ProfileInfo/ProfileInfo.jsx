import Preloader from "../../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className={s.profileInfo__wrapper}>
			<img className={s.profile__image} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt='main-img'></img>
			<h1 className={s.profile__name}>{props.profile.fullName}</h1>
			<img className={s.profileAva__image} src={props.profile.photos.small ? props.profile.photos.small : userPhoto} alt='main-img'></img>
			<p className={s.profile__description}>{props.profile.aboutMe}</p>
		</div>
	)
}

export default ProfileInfo


// 'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg'