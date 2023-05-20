import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"

const setActive = ({isActive}) => isActive ? `${s.active} ${s.item}` : s.item;

const Navbar = () => {
	return (
		<nav className={s.mainNav}>
		<ul className={s.navList}>
			<li><NavLink className={setActive} to='/profile'>Profile</NavLink></li>
			<li><NavLink className={setActive} to='/dialogs'>Dialogs</NavLink></li>
			<li><NavLink className={setActive} to='/news'>News</NavLink></li>
			<li><NavLink className={setActive} to='/music'>Music</NavLink></li>
			<li><NavLink className={setActive} to='/settings'>Settings</NavLink></li>
			<li><NavLink className={setActive} to='/users'>Users</NavLink></li>
		</ul>
	</nav>
	)
}

export default Navbar