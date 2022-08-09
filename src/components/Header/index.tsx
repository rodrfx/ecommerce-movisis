import { Alien, ShoppingCartSimple } from 'phosphor-react';
import { CartLinkStyle, Container, Content, LogoLinkStyle } from './styles';

export const Header = () => {
	return (
		<Container>
			<Content>
				<LogoLinkStyle to="/">
					<Alien size={32} />
					<h1>Alien Shop</h1>
				</LogoLinkStyle>
				<CartLinkStyle to="/shoppingcart">
					<button type="button">
						<ShoppingCartSimple size={30} />
						<span>3</span>
					</button>
				</CartLinkStyle>
			</Content>
		</Container>
	);
};
