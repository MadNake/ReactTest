import s from "./Dialogs.module.css"
import DialogLink from "./DialogLink/DialogLink"
import Message from "./Message/Message"
import { Field, Form, Formik } from "formik"
import { newProfilePostValidator } from "../../validators/validators"
import { Textarea } from "../common/Forms/TextareaForm"


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
				<AddMessageForm addNewMessage={addNewMessage} />
			</div>
		</section>
	)
}

const AddMessageForm = (props) => {

	let validator = newProfilePostValidator("message")

	let onSubmit = (values) => {
		props.addNewMessage(values.message)
		values.message = "";
	}
	return (
		<Formik
			initialValues={{ message: "" }}
			validate={validator}
			onSubmit={onSubmit}
		>
			{() => (
				<Form className={s.messageTextArea}>
					<Field name="message" component={Textarea}/>
					<button type="submit">send</button>
				</Form>
			)}
		</Formik>
	)
}


export default Dialogs