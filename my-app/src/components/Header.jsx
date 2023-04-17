import s from "../style/Header.module.css"

const Header = () => {
	return (
		<header className={s.main__header}>
			<img className='header__logo' width={64} src="https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" alt="logo"></img>
		</header>
	)
}

export default Header