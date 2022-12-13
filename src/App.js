import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

import './Styles/checkout.css';
import './Styles/Header.css';
import './Styles/CheckoutProduct.css';
import './Styles/Home.css';
import './Styles/product.css';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
