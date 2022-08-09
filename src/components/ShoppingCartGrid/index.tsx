import { ShoppingCartItem } from '../ShoppingCartItem';
import * as S from './styles';

export const ShoppingCartGrid = () => {
	return (
		<S.Wrapper>
			<ShoppingCartItem />
			<ShoppingCartItem />
			<ShoppingCartItem />
		</S.Wrapper>
	);
};
