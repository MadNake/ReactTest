import { ErrorMessage } from "formik"
import s from "./Forms.module.css"

const FormControl = Element => ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	...props
}) => {

	return (
		<div className={s.field__container}>
		<Element
			{...field}
			{...props}
			className={
				touched[field.name] && errors[field.name]
					? `${s.field_error} ${s.field}`
					: s.field
			}
		/>

		{touched[field.name] && errors[field.name]  && (
			<ErrorMessage
				name={[field.name]}
				component="span"
				className={s.field__extra_error}
			/>
		)}
	</div>
	)
}

export const Textarea = FormControl("textarea")
export const Input = FormControl("input")