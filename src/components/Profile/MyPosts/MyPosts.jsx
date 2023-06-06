import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

	let postsElements = props.posts.map((post) => (
		<Post key={post.id}
			text={post.message}
			name={post.name}
			likesCount={post.likesCount} />));

	let newPostElement = React.createRef() // create a link

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value; // use a link after assignment
		props.updateNewPostText(text);
	}

	return (
		<div className={s.profile__posts}>
			<div className={s.textarea__wrapper}>
				<textarea
					value={props.newPostText}
					onChange={ onPostChange }
					ref={newPostElement} //assign a link
					name=""
					id=""
					cols="30"
					rows="4" />
				<button onClick={ onAddPost }>Add post</button>
				<button>Remove</button>
			</div>
			{postsElements}
		</div>
	)
}

export default MyPosts