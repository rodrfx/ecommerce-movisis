import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { UserShoppingCartContextProvider } from './context/UserShoppingCart';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<UserShoppingCartContextProvider>
				<BrowserRouter>
					<Header />
					<Router />
				</BrowserRouter>
			</UserShoppingCartContextProvider>
			<GlobalStyle />
		</ThemeProvider>
	);
};
