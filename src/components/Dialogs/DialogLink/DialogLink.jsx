import { NavLink } from "react-router-dom"
import s from "./DialogLink.module.css"

const setActive = ({isActive}) => isActive ? `${s.active} ${s.dialog__link}` : s.dialog__link;

const DialogLink = (props) => {
	return (
			<NavLink to={"/dialogs/" + props.id} className={setActive}>
				<span>
					{props.name}
				</span>
			</NavLink>
	)
}

export default DialogLink