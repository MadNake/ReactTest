import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.posts__item}>
			<img className={s.img} src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt="post" />
			<h3 className={s.name}>{props.name}</h3>
			<p className={s.text}>{props.text}</p>
			<span className={s.likes}>Likes {props.likesCount}</span>
		</div>
	)
}

export default Post