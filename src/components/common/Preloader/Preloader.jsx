import preloader from "../../../assets/images/loading-gif.gif"
import s from "./Preloader.module.css"

let Preloader = () => {
	return (
		<div className={s.preloader__container}>
			<img className={s.preloader__item} alt="loading-gif" src={preloader} />
		</div>
	)
}

export default Preloader