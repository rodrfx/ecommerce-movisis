import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

export const ShoppingCartItem = () => {
	return (
		<S.Container>
			<S.Content>
				<img src="https://picsum.photos/80/80" alt="" />
				<S.ProductInfo>
					<S.ProductName>Produto Camiseta et extraterrestre</S.ProductName>
					<S.QuantityPrice>
						<p>R$ 10,00</p>
						<div>
							<button>
								<Plus size={15} weight="bold" />
							</button>
							<span>1</span>
							<button>
								<Minus size={15} weight="bold" />
							</button>
						</div>
					</S.QuantityPrice>
				</S.ProductInfo>
			</S.Content>
		</S.Container>
	);
};
