import s from "./Dialogs.module.css"
import DialogLink from "./DialogLink/DialogLink"
import Message from "./Message/Message"
import { Field, Form, Formik } from "formik"


const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
		<li key={d.id} className={s.dialog}>
			<DialogLink name={d.name} id={d.id} />
		</li>));

	let messagesElements = props.dialogsPage.messagesData.map((message) => <Message text={message.message} key={message.id} />);

	let addNewMessage = (newMessageBody) => {
		props.sendMessage(newMessageBody);
	}

	return (
		<section className={s.dialogs}>
			<ul className={s.dialogs__list}>
				{dialogsElements}
			</ul>
			<div className={s.messages}>
				<ul className={s.messages__list}>
					{messagesElements}
				</ul>
				<AddMessageForm addNewMessage={addNewMessage}/>
			</div>
		</section>
	)
}

const AddMessageForm = (props) => {

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
		props.addNewMessage(values.message)
		values.message = "";
	}
	return (
		<Formik
			initialValues={{ message: "" }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{() => (
				<Form className={s.messageTextArea}>
					<Field name="message" component="textarea" placeholder="enter your message" />
					<button type="submit">send</button>
				</Form>
			)}
		</Formik>
	)
}


export default Dialogs