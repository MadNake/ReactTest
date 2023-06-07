import { NavLink } from "react-router-dom"
import s from "./Header.module.css"
import userPhoto from "../../assets/images/user.png"

const Header = (props) => {

	const loginBar = () => {
		if (props.isAuth) {
			return (
				<div className={s.login__block}>
					<img className={s.profileAva__image} src={props.profile.photos.small ? props.profile.photos.small : userPhoto} alt='main-img' />
					<NavLink className={s.login__link} to={`/profile/${props.userId}`}>
						{props.login}
					</NavLink>
				</div>)
		} else {
			return (
				<div className={s.login__block}>
					<NavLink className={s.login__link} to={"/login"}>Login</NavLink>
				</div>
			)
		}
	}

	return (
		<header className={s.main__header}>
			<img className={s.header__logo} src="https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" alt="logo"></img>
			{loginBar()}
		</header>
	)
}

export default Header