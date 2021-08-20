import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Dashboard />
			<Footer/>
		</>
	)
}

export default App;
