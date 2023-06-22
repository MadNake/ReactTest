import { Field, Form, Formik } from "formik";
import s from "./Login.module.css"
import { Input } from "../common/Forms/Forms";
import { LogInSchema } from "../../validators/validators";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {

	const onSubmit = (values, { setSubmitting, resetForm }) => {
		props.onSubmit(values)
		setSubmitting(false);
		resetForm();
	}

	return (
		<Formik
			initialValues={{ email: '', password: '', rememberMe: false }}
			validationSchema={LogInSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={s.loginForm}>
					<Field type="email" name="email" placeholder="email" component={Input}/>
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

const LoginPage = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Navigate to={"/profile"}/>
	}

	return <div className={s.loginForm__container}>
		<h1>Login</h1>
		<LoginForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage)