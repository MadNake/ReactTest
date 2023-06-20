import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { newProfilePostValidator } from '../../../validators/validators';

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
			{({ errors, touched }) => (
				<Form className={s.myPostForm__container}>
					<div className={s.textarea__container}>
						<Field
							name="postMessage"
							component="textarea"
							placeholder="enter your post message"
							cols="30"
							rows="4"
							className={
								errors.postMessage && touched.postMessage && errors.postMessage === 'Max length is 30'
									? `${s.textarea_error} ${s.textarea}`
									: s.textarea
							}
						/>
						{errors.postMessage && touched.postMessage && errors.postMessage === 'Max length is 30' && (
              <ErrorMessage
                name="postMessage"
                component="span"
                className={s.textarea__extra_error}
              />
            )}
					</div>
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