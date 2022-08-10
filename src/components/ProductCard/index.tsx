import { Container } from './styles';

export interface Product {
	title: string;
	price: number;
	image: string;
	inclusionDate?: any;
}

export const ProductCard = ({ title, price, image }: Product) => {
	const formattedPrice = price.toFixed(2).toString().replace('.', ',');

	return (
		<Container>
			<img src={image} alt={title} />
			<p>{title}</p>
			<p>R$ {formattedPrice}</p>
			<button type="button">Comprar</button>
		</Container>
	);
};
