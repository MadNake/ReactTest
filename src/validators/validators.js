import * as Yup from 'yup';

export const ProfilePostSchema = Yup.object().shape({
	postMessage: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required(''),
});

export const DialogsSchema = Yup.object().shape({
	message: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required(''),
});;

export const LogInSchema = Yup.object().shape({
	email: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required')
		.email('Invalid email').required('Required'),
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});