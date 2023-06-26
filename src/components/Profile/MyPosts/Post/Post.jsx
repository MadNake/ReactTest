import s from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png"

const Post = (props) => {
	return (
		<div className={s.posts__item}>
			<img className={s.img} src={userPhoto} alt="post" />
			<h3 className={s.name}>{props.name}</h3>
			<p className={s.text}>{props.text}</p>
			<span className={s.likes}>Likes {props.likesCount}</span>
		</div>
	)
}

export default Post