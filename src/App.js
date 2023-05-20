import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from "react-router-dom"
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className='app-wrapper__content'>
				<Routes>
					<Route path='/profile' element={<Profile />} />
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/users' element={<UsersContainer />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
