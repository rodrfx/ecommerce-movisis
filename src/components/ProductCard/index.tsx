import { formatPrice } from '../../util/formatPrice';
import { Container } from './styles';

interface ProductCardProps {
	addItemToCart: () => void;
	title: string;
	price: number;
	image: string;
}

export const ProductCard = ({
	title,
	price,
	image,
	addItemToCart,
}: ProductCardProps) => {
	const formattedPrice = formatPrice(price);

	return (
		<Container>
			<img src={image} alt={title} />
			<p>{title}</p>
			<p>R$ {formattedPrice}</p>
			<button type="button" onClick={addItemToCart}>
				Comprar
			</button>
		</Container>
	);
};
