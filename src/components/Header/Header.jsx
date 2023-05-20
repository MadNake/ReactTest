import s from "./Header.module.css"

const Header = (props) => {
	return (
		<header className={s.main__header}>
			<img className={s.header__logo} src="https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" alt="logo"></img>
		</header>
	)
}

export default Header