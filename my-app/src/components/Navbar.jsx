import s from "../style/Navbar.module.css"

const Navbar = () => {
	return (
		<nav className={s.mainNav}>
		<ul>
			<li><a href='#2'>Profile</a></li>
			<li><a href='#2'>Massage</a></li>
			<li><a href='#2'>News</a></li>
			<li><a href='#2'>Music</a></li>
			<li><a href='#2'>Settings</a></li>
		</ul>
	</nav>
	)
}

export default Navbar