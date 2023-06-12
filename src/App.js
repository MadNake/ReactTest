import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom"
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';


function App() {
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
}

export default App;
