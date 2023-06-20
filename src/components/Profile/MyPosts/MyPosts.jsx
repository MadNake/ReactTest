import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, Form, Formik } from 'formik';
import { newProfilePostValidator } from '../../../validators/validators';
import { Textarea } from '../../common/Forms/TextareaForm';


const AddNewPostForm = (props) => {

	const validator = newProfilePostValidator("postMessage")

	let onSubmit = (values, { resetForm }) => {
		props.addNewPostText(values.postMessage);
		resetForm();
	}
	return (
		<Formik
			initialValues={{ postMessage: "" }}
			validate={validator}
			onSubmit={onSubmit}
		>
			{() => (
				<Form className={s.myPostForm__container}>
					<Field name="postMessage" component={Textarea}/>
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