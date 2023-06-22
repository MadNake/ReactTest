import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, Form, Formik } from 'formik';
import { ProfilePostSchema } from '../../../validators/validators';
import { Textarea } from '../../common/Forms/Forms';


const AddNewPostForm = (props) => {

	let onSubmit = (values, { resetForm }) => {
		props.addNewPostText(values.postMessage);
		resetForm();
	}
	return (
		<Formik
			initialValues={{ postMessage: "" }}
			validationSchema={ProfilePostSchema}
			onSubmit={onSubmit}
		>
			{() => (
				<Form className={s.myPostForm__container}>
					<Field
						name="postMessage"
						component={Textarea}
						cols="30"
						rows="4"
						placeholder="enter your post message" />
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

	let addNewPostText = (newPostText) => {
		props.addPost(newPostText)
	}

	return (
		<div className={s.profile__posts}>
			<AddNewPostForm addNewPostText={addNewPostText} />
			{postsElements}
		</div>
	)
}

export default MyPosts