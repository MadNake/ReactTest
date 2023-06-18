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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return {
				...state,
				messagesData: [...state.messagesData, { id: 5, message: action.newMessageBody }],
			};
		}
		default:
			return state
	}
}

export const sendMessageCreator = (newMessageBody) => (
	{ type: SEND_MESSAGE, newMessageBody }
)

export default dialogsReducer