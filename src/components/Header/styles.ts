import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
	background: ${({ theme }) => theme['gray-700']};
`;

export const Content = styled.header`
	max-width: 120rem;
	height: 6rem;
	margin: 0 auto;
	padding-inline: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoLinkStyle = styled(Link)`
	color: ${({ theme }) => theme['gray-100']};
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem 0;
	transition: opacity 0.2s;

	svg {
		color: ${({ theme }) => theme['green-500']};
	}

	&:hover {
		opacity: 0.8;
	}
`;

export const CartLinkStyle = styled(Link)`
	button {
		position: relative;
		background: transparent;
		padding: 0.7rem;
		font-size: 0;
		border: 0;
		transition: opacity 0.2s;

		&:hover {
			opacity: 0.8;
		}
	}

	span {
		border: 1px solid ${({ theme }) => theme['green-500']};
		background-color: ${({ theme }) => theme['green-500']};
		color: ${({ theme }) => theme['gray-100']};
		position: absolute;
		top: 2px;
		right: 0;
		border-radius: 50%;
		height: 22px;
		width: 22px;
		font-size: 1.4rem;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg {
		color: ${({ theme }) => theme['gray-100']};
	}
`;
