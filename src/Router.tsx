import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ShoppingCart } from './pages/ShoppingCart';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/shoppingcart" element={<ShoppingCart />} />
		</Routes>
	);
};
