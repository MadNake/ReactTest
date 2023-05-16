import s from "./Dialogs.module.css"
import DialogLink from "./DialogLink/DialogLink"
import Message from "./Message/Message"


const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogLink name={dialog.name} key={dialog.id} id={dialog.id} />);
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
		<div className={s.dialogs}>
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
						placeholder="enter your message"/>
					<button onClick={ onSendMessageClick }>send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs