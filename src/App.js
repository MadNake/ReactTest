import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	};

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper__content'>
					<Routes>
						<Route path='/profile/:profileId?' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		);
	};

}


const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)