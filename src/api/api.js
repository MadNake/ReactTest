import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: {
		"API-KEY": "ba9a36ed-0bd9-454f-973e-30e22fc92729"
	},
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data);
	},
	follow(id) {
		return instance.delete(`follow/${id}`)
		.then(response => response.data)
	},
	unfollow(id) {
		return instance.post(`follow/${id}`, {})
		.then(response => response.data)
	},
};

// export const followAPI = {
// 	deleteFollow(id) {
// 		return instance.delete(`follow/${id}`)
// 		.then(response => response.data)
// 	},
// 	createFollow(id) {
// 		return instance.post(`follow/${id}`, {})
// 		.then(response => response.data)
// 	},
// };

export const profileAPI = {
	getProfile(profileId) {
		return instance.get(`profile/${profileId}`)
		.then(response => response.data);
	},
};

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`)
		.then(response => response.data);
	},
};