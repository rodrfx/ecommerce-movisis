import { Minus, Plus } from 'phosphor-react';
import { formatPrice } from '../../util/formatPrice';
import * as S from './styles';

interface ShoppingCartItemProps {
	title: string;
	image: string;
	price: number;
	quantity: number;
}

export const ShoppingCartItem = ({
	title,
	image,
	price,
	quantity,
}: ShoppingCartItemProps) => {
	const formattedPrice = formatPrice(price);

	return (
		<S.Container>
			<S.Content>
				<img src={image} alt={title} />
				<S.ProductInfo>
					<S.ProductName>{title}</S.ProductName>
					<S.QuantityPrice>
						<p>R$ {formattedPrice}</p>
						<div>
							<button>
								<Minus size={15} weight="bold" />
							</button>
							<span>{quantity}</span>
							<button>
								<Plus size={15} weight="bold" />
							</button>
						</div>
					</S.QuantityPrice>
				</S.ProductInfo>
			</S.Content>
		</S.Container>
	);
};
