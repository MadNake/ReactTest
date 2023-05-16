import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, message: "this text1", likesCount: 32, name: "Name1Tos" },
				{ id: 2, message: "this text2", likesCount: 24, name: "Name235hs" },
				{ id: 3, message: "this tex22", likesCount: 14, name: "Name2fagg" },
			],
			newPostText: "",
		},
		dialogsPage: {
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
		},
		sideBar: {},
	},
	_callSubscriber() {

	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sideBar, action)

		this._callSubscriber(this._state)
	},
}

window.store = store;

export default store