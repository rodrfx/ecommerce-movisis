import { useContext } from 'react';
import { UserFilters } from '../../context/UserFilters';
import { Container } from './styles';

export const Sidebar = () => {
	const {
		handleFilterMinPriceChange: onChangeMinPrice,
		handleFilterMaxPriceChange: onChangeMaxPrice,
		sortByPrice,
		handleSortByPrice: onChangeSortByPrice,
		sortByDate,
		handleSortByDate: onChangeSortByDate,
	} = useContext(UserFilters);

	return (
		<Container>
			<h1>Filtrar</h1>
			<div>
				<h2>Preço</h2>
				<p>De</p>
				<input
					type="number"
					placeholder="R$ 0,00"
					name="filterMinPrice"
					onChange={onChangeMinPrice}
				/>
				<p>Até</p>
				<input
					type="number"
					placeholder="R$ 0,00"
					name="filterMaxPrice"
					onChange={onChangeMaxPrice}
				/>
			</div>

			<div>
				<h2>Ordenar</h2>
				<p>Preço</p>
				<select value={sortByPrice} onChange={onChangeSortByPrice}>
					<option value="">Relevância</option>
					<option value="increasingPrice">Menor preço</option>
					<option value="DecreasingPrice">Maior preço</option>
				</select>

				<p>Data de inclusão</p>
				<select value={sortByDate} onChange={onChangeSortByDate}>
					<option value="">Selecione</option>
					<option value="DecreasingDate">Mais recente</option>
					<option value="increasingDate">Mais antigo</option>
				</select>
			</div>
		</Container>
	);
};
