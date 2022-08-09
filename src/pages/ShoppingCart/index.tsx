import { OrderSummary } from '../../components/OrderSummary';
import { ShoppingCartGrid } from '../../components/ShoppingCartGrid';
import { Container, Content, HeaderStyle } from './styles';

export const ShoppingCart = () => {
	return (
		<Container>
			<HeaderStyle>
				<h1>Seu carrinho de compras</h1>
			</HeaderStyle>
			<Content>
				<ShoppingCartGrid />
				<OrderSummary />
			</Content>
		</Container>
	);
};
