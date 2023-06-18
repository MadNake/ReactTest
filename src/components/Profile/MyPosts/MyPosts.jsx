import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, Form, Formik } from 'formik';

const AddNewPostForm = (props) => {

	let validate = values => {
		// const errors = {};
		// if (!values.email) {
		// 	errors.email = 'Required';
		// } else if (
		// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		// ) {
		// 	errors.email = 'Invalid email address';
		// }
		// return errors;
	}

	let onSubmit = (values) => {
		props.addNewPostText(values.postMessage);
		values.postMessage = "";
	}
	return (
		<Formik
			initialValues={{ postMessage: "" }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{() => (
				<Form className={s.textarea__wrapper}>
					<Field
						name="postMessage"
						component="textarea"
						placeholder="enter your post message"
						cols="30"
						rows="4" />
					<button type="submit">Add post</button>
					<button>Remove</button>
				</Form>
			)}
		</Formik>
	)
}

const MyPosts = (props) => {

	let postsElements = props.posts.map((post) => (
		<Post key={post.id}
			text={post.message}
			name={post.name}
			likesCount={post.likesCount} />));

	let addNewPostText =(newPostText) => {
		props.addPost(newPostText)
	}

	return (
		<div className={s.profile__posts}>
			<AddNewPostForm addNewPostText={addNewPostText}/>
			{postsElements}
		</div>
	)
}

export default MyPosts