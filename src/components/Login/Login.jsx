import { Field, Form, Formik } from "formik";
import s from "./Login.module.css"
import { Input } from "../common/Forms/Forms";
import { LogInSchema } from "../../validators/validators";

const LoginForm = () => {



	let onSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	}

	return (
		<Formik
			initialValues={{ login: '', password: '', rememberMe: "" }}
			validationSchema={LogInSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={s.loginForm}>
					<Field type="login" name="login" placeholder="Login" component={Input} />
					<Field type="password" name="password" placeholder="Password" component={Input} />
					<label className={s.rememberMe__label}>
						<Field type="checkbox" name="rememberMe" />
						<span>Remember me</span>
					</label>
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}

const LoginPage = (props) => (
	<div className={s.loginForm__container}>
		<h1>Login</h1>
		<LoginForm />
	</div>
)

export default LoginPage