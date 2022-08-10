import { MagnifyingGlass } from 'phosphor-react';
import { ChangeEvent, useContext, useState } from 'react';
import { UserFilters } from '../../context/UserFilters';
import { UserShoppingCart } from '../../context/UserShoppingCart';
import { ProductCard } from '../ProductCard';
import { Container, SearchBarStyle, Wrapper } from './styles';

export interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	inclusionDate: Date;
}

interface ProductsType {
	products: Product[];
}

export const ProductGrid = ({ products }: ProductsType) => {
	const [searchInput, setSearchInput] = useState('');
	const { filterMinPrice, filterMaxPrice, sortByPrice, sortByDate } =
		useContext(UserFilters);
	const { addItemToCart } = useContext(UserShoppingCart);

	const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
	};

	const conditionsToSearchTheProducts =
		searchInput.length > 0 ||
		filterMinPrice > 0 ||
		filterMaxPrice > 0 ||
		sortByPrice.length > 0 ||
		sortByDate.length > 0;

	const filteredProducts = conditionsToSearchTheProducts
		? products
				.filter((product) => {
					const titleLowerCase = product.title.toLowerCase();
					const searchInputLowerCase = searchInput.toLowerCase();
					return titleLowerCase.includes(searchInputLowerCase);
				})
				.filter((product) => product.price > filterMinPrice)
				.filter((product) => product.price < filterMaxPrice)

				.sort((a, b) =>
					sortByPrice === 'increasingPrice'
						? a.price - b.price
						: sortByPrice === 'DecreasingPrice'
						? b.price - a.price
						: sortByDate === 'increasingDate'
						? a.inclusionDate.getTime() - b.inclusionDate.getTime()
						: sortByDate === 'DecreasingDate'
						? b.inclusionDate.getTime() - a.inclusionDate.getTime()
						: a.id - b.id
				)
		: [];

	return (
		<Container>
			<SearchBarStyle>
				<MagnifyingGlass size={20} />
				<input
					type="text"
					id="searchInput"
					placeholder="Buscar"
					value={searchInput}
					onChange={handleSearchInputChange}
				/>
			</SearchBarStyle>
			{conditionsToSearchTheProducts ? (
				<Wrapper>
					{filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
							addItemToCart={() => addItemToCart(product)}
						/>
					))}
				</Wrapper>
			) : (
				<Wrapper>
					{products.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
							addItemToCart={() => addItemToCart(product)}
						/>
					))}
				</Wrapper>
			)}
		</Container>
	);
};
