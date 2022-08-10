import { useContext } from 'react';
import { UserShoppingCart } from '../../context/UserShoppingCart';
import { ShoppingCartItem } from '../ShoppingCartItem';
import * as S from './styles';

export const ShoppingCartGrid = () => {
	const { cart } = useContext(UserShoppingCart);

	return (
		<S.Wrapper>
			{cart.map((productCart) => {
				return (
					<ShoppingCartItem
						key={productCart.id}
						image={productCart.image}
						price={productCart.price}
						title={productCart.title}
						quantity={productCart.quantity}
					/>
				);
			})}
		</S.Wrapper>
	);
};
