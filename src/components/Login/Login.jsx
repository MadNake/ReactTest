import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Login.module.css"

const LoginFormFormik = () => {

	let validateFormik = values => {
		// const errors = {};
		// if (!values.email) {
		// 	errors.email = 'Required';
		// } else if (
		// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		// ) {
		// 	errors.email = 'Invalid email address';
		// }
		// return errors;
	}

	let onSubmitFormik = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	}

	return (
		<Formik
			initialValues={{ login: '', password: '', rememberMe: "" }}
			validate={validateFormik}
			onSubmit={onSubmitFormik}
		>
			 {({ isSubmitting, values }) => (
         <Form className={s.loginForm}>
           <Field type="login" name="login" placeholder="Login" onChange={console.log(values)} />
           <ErrorMessage name="login" component="div" />
           <Field type="password" name="password" placeholder="Password" />
           <ErrorMessage name="password" component="div" />
					 <label className={s.rememberMe__label}>
						<Field type="checkbox" name="rememberMe"/>
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
		<LoginFormFormik />
	</div>
)

export default LoginPage