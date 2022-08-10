import { useContext } from 'react';
import { UserShoppingCart } from '../../context/UserShoppingCart';
import { formatPrice } from '../../util/formatPrice';
import * as S from './styles';

export const OrderSummary = () => {
	const { cart } = useContext(UserShoppingCart);

	const getTotalValue = () => {
		let totalValue = 0;
		for (let product of cart) {
			totalValue += product.price * product.quantity;
		}
		return totalValue;
	};

	const productsPrice = getTotalValue();
	const formattedProductsPrice = formatPrice(productsPrice);
	const formattedPriceWithShipping = formatPrice(productsPrice + 10);

	return (
		<S.Container>
			<header>
				<S.Title>Resumo</S.Title>
			</header>
			<main>
				<S.ProductDetail>
					<p>Produtos</p>
					<p>R$ {formattedProductsPrice}</p>
				</S.ProductDetail>
				<S.ProductDetail>
					<p>Descontos</p>
					<p>R$ 0,00</p>
				</S.ProductDetail>
				<S.ProductDetail>
					<p>Frete</p>
					<p>R$ 10,00</p>
				</S.ProductDetail>
				<S.TotalSum>
					<p>Total</p>
					<p>R$ {formattedPriceWithShipping}</p>
				</S.TotalSum>
			</main>
			<footer>
				<S.Button>Finalizar Compra</S.Button>
			</footer>
		</S.Container>
	);
};
