import * as S from './styles';

export const OrderSummary = () => {
	return (
		<S.Container>
			<header>
				<S.Title>Resumo</S.Title>
			</header>
			<main>
				<S.ProductDetail>
					<p>Produtos</p>
					<p>R$ 11,00</p>
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
					<p>R$ 210,00</p>
				</S.TotalSum>
			</main>
			<footer>
				<S.Button>Finalizar Compra</S.Button>
			</footer>
		</S.Container>
	);
};
