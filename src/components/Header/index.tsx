import { Alien, ShoppingCartSimple } from 'phosphor-react';
import * as S from './styles';

export const Header = () => {
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
						<span>3</span>
					</button>
				</S.CartLinkStyle>
			</S.Content>
		</S.Container>
	);
};
