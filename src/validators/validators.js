
export const newProfilePostValidator = (name) => (value) => {
	const error = {};

	if (!value[name]) error[name] = 'Required';

	if (value[name].length > 30) error[name] = "Max length is 30"

	return error
}
