import { createContext, ReactNode, useState } from 'react';

interface UserShoppingCartContextProviderProps {
	children: ReactNode;
}

interface Product {
	quantity: number;
	id: number;
	title: string;
	price: number;
	image: string;
	inclusionDate: Date;
}

interface CartProduct extends Product {
	quantity: number;
}

interface UserShoppingCartContextType {
	cart: CartProduct[];
	addItemToCart: (newItem: any) => void;
}

export const UserShoppingCart = createContext(
	{} as UserShoppingCartContextType
);

export const UserShoppingCartContextProvider = ({
	children,
}: UserShoppingCartContextProviderProps) => {
	const [cart, setCart] = useState<CartProduct[]>([]);

	const addItemToCart = (newItem: any) => {
		const index = cart.findIndex((i) => i.id === newItem.id);
		let newCart = [...cart];
		if (index === -1) {
			newCart.push({ ...newItem, quantity: 1 });
			alert(`${newItem.title} foi adicionado ao seu carrinho de compras!`);
		} else {
			newCart[index].quantity += 1;
			alert(
				`${newItem.title} mais uma unidade foi adicionada ao produto já presente no carrinho de compras`
			);
		}
		setCart(newCart);
	};

	return (
		<UserShoppingCart.Provider value={{ cart, addItemToCart }}>
			{children}
		</UserShoppingCart.Provider>
	);
};
