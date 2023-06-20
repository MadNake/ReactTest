import { ErrorMessage } from "formik"
import s from "./TextareaForm.module.css"

export const Textarea = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	// ...props
}) => (
	<div className={s.textarea__container}>
		<textarea
			{...field}
			// {...props}
			placeholder="enter your post message"
			cols="30"
			rows="4"
			className={
				touched[field.name] && errors[field.name] === 'Max length is 30'
					? `${s.textarea_error} ${s.textarea}`
					: s.textarea
			}
		/>

		{touched[field.name] && errors[field.name] === 'Max length is 30' && (
			<ErrorMessage
				name={[field.name]}
				component="span"
				className={s.textarea__extra_error}
			/>
		)}

		{/* <input type="text" {...field} {...props} />
		{touched[field.name] &&
			errors[field.name] && <div className="error">{errors[field.name]}</div>} */}
	</div>
);