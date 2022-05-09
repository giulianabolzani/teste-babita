import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Menu from './menu';

export default function AppRouter(){
	return(
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='menu' element={<Menu/>}/>
			</Routes>
		</Router>
	);
}