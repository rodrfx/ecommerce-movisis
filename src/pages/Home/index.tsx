import { ProductGrid } from '../../components/ProductGrid';
import { Sidebar } from '../../components/Sidebar';
import { UserFiltersContextProvider } from '../../context/UserFilters';
import { Container } from './styles';

export const Home = () => {
	const products = [
		{
			id: 1,
			title: 'Camiseta Disco Voador',
			inclusionDate: new Date(2022, 7, 25),
			price: 100.9,
			image:
				'https://d3ugyf2ht6aenh.cloudfront.net/stores/229/305/products/iaiai1-e6737f4cf9240c60b515675312141383-1024-1024.jpg',
		},
		{
			id: 2,
			title: 'Moletom Planeta Terra',
			inclusionDate: new Date(2022, 7, 22),

			price: 259.9,
			image:
				'https://img.elo7.com.br/product/original/3103BB0/blusa-planeta-terra-espaco-sistema-solar-moletom-blusa-espaco.jpg',
		},
		{
			id: 3,
			title: 'Camiseta Planetas',
			inclusionDate: new Date(2022, 8, 1),
			price: 69.9,
			image:
				'https://a-static.mlcdn.com.br/800x560/camiseta-planetas-camisa-espaco-galaxias-darkwood/darkwoodshop2/11228651084/98261ab296824e6d69a6e7f6b0c5ee7d.jpg',
		},
		{
			id: 4,
			title: 'Blusa Moletom Galaxia Nebulosa',
			inclusionDate: new Date(2022, 8, 5),
			price: 59.9,
			image:
				'https://http2.mlstatic.com/D_NQ_NP_794174-MLB31208745262_062019-O.jpg',
		},
		{
			id: 5,
			title: 'Moletom Planeta Vermelho',
			inclusionDate: new Date(2022, 8, 9),
			price: 200.0,
			image:
				'https://img.elo7.com.br/product/original/3103BEA/blusa-planeta-vermelho-espaco-cores-ciencia-moletom-moletom-planetas.jpg',
		},
		{
			id: 6,
			title: 'Camiseta Planeta Saturno',
			inclusionDate: new Date(2022, 8, 2),
			price: 89.9,
			image:
				'https://images.tcdn.com.br/img/img_prod/697287/camiseta_planeta_saturno_sistema_solar_espaco_7241_1_20191112120529.jpg',
		},
	];

	return (
		<Container>
			<UserFiltersContextProvider>
				<Sidebar />
				<ProductGrid products={products} />
			</UserFiltersContextProvider>
		</Container>
	);
};
