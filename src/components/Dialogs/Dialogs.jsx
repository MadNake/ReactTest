import s from "./Dialogs.module.css"
import DialogLink from "./DialogLink/DialogLink"
import Message from "./Message/Message"


const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
		<li className={s.dialog}>
			<DialogLink name={d.name} key={d.id} id={d.id} />
		</li>));
		
	let messagesElements = props.dialogsPage.messagesData.map((message) => <Message text={message.message} key={message.id} />);
	let newMessageBody = props.dialogsPage.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
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
				<div className={s.messageTextArea}>
					<textarea
						value={newMessageBody}
						onChange={onNewMessageChange}
						placeholder="enter your message" />
					<button onClick={onSendMessageClick}>send</button>
				</div>
			</div>
		</section>
	)
}

export default Dialogs