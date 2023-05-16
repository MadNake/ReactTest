const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
	dialogsData: [
		{ id: 1, name: "Dmitrii" },
		{ id: 2, name: "Maksym" },
		{ id: 3, name: "Vikrot" },
		{ id: 4, name: "Lisa" },
		{ id: 5, name: "Valera" },
	],
	messagesData: [
		{ id: 1, message: "hi" },
		{ id: 2, message: "How are u?" },
		{ id: 3, message: "Good, and u?" },
		{ id: 4, message: "Good to" },
	],
	newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = "";
			state.messagesData.push({ id: 5, message: body });
			return state

		default:
			return state
	}
}

export const sendMessageCreator = () => (
	{ type: SEND_MESSAGE }
)

export const updateNewMessageBodyCreator = (text) => (
	{ type: UPDATE_NEW_MESSAGE_BODY, body: text }
)

export default dialogsReducer