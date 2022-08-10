import { Alien, ShoppingCartSimple } from 'phosphor-react';
import { useContext } from 'react';
import { UserShoppingCart } from '../../context/UserShoppingCart';
import * as S from './styles';

export const Header = () => {
	const { cart } = useContext(UserShoppingCart);
	const cartSize = cart.length;

	return (
		<S.Container>
			<S.Content>
				<S.LogoLinkStyle to="/">
					<Alien size={32} />
					<h1>Alien Shop</h1>
				</S.LogoLinkStyle>
				<S.CartLinkStyle to="/shoppingcart">
					<button type="button">
						<ShoppingCartSimple size={30} />
						<S.NumberOfProductsCart cartSize={cartSize}>
							{cartSize}
						</S.NumberOfProductsCart>
					</button>
				</S.CartLinkStyle>
			</S.Content>
		</S.Container>
	);
};
