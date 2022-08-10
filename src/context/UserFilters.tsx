import { createContext, ReactNode, useState } from 'react';

interface UserFiltersContextProviderProps {
	children: ReactNode;
}

interface UserFiltersContextType {
	filterMinPrice: number;
	handleFilterMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	filterMaxPrice: number;
	handleFilterMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	sortByPrice: string;
	handleSortByPrice: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	sortByDate: string;
	handleSortByDate: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const UserFilters = createContext({} as UserFiltersContextType);

export const UserFiltersContextProvider = ({
	children,
}: UserFiltersContextProviderProps) => {
	const [filterMinPrice, setFilterMinPrice] = useState(0);
	const [filterMaxPrice, setFilterMaxPrice] = useState(1000);
	const [sortByPrice, setSortByPrice] = useState('');
	const [sortByDate, setSortByDate] = useState('');

	const handleFilterMinPriceChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFilterMinPrice(parseInt(e.target.value));

		if (isNaN(parseInt(e.target.value))) {
			setFilterMinPrice(0);
		}
	};

	const handleFilterMaxPriceChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFilterMaxPrice(parseInt(e.target.value));

		if (isNaN(parseInt(e.target.value))) {
			setFilterMaxPrice(1000);
		}
	};

	const handleSortByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortByPrice(e.target.value);
	};

	const handleSortByDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortByDate(e.target.value);
	};

	return (
		<UserFilters.Provider
			value={{
				filterMinPrice,
				handleFilterMinPriceChange,
				filterMaxPrice,
				handleFilterMaxPriceChange,
				sortByPrice,
				handleSortByPrice,
				sortByDate,
				handleSortByDate,
			}}
		>
			{children}
		</UserFilters.Provider>
	);
};
