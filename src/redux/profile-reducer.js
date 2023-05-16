const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
	postsData: [
		{ id: 1, message: "this text1", likesCount: 32, name: "Name1Tos" },
		{ id: 2, message: "this text2", likesCount: 24, name: "Name235hs" },
		{ id: 3, message: "this tex22", likesCount: 14, name: "Name2fagg" },
	],
	newPostText: "",
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: "5",
				message: state.newPostText,
				likesCount: 0,
				name: "Name1Tos",
			};
			state.postsData.push(newPost);
			state.newPostText = "";
			return state

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state

		default:
			return state
	}
}

export const addPostActionCreator = () => (
	{ type: ADD_POST }
)

export const updateNewPostTextActionCreator = (text) => (
	{ type: UPDATE_NEW_POST_TEXT, newText: text }
)

export default profileReducer