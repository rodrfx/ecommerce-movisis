import styled from 'styled-components';

export const Container = styled.div`
	background: ${({ theme }) => theme['gray-700']};
	border-radius: 8px;
	padding: 1.6rem;
`;

export const Content = styled.div`
	display: flex;

	img {
		width: 8rem;
		height: 8rem;
	}
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 1.2rem;
	width: 100%;
	overflow: hidden;
`;

export const ProductName = styled.p`
	font-size: 1.6rem;
	line-height: 1.6;
	color: ${({ theme }) => theme['gray-400']};
	font-weight: 500;
`;

export const QuantityPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;

	p {
		font-size: 2rem;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 12rem;
		border: 1px solid ${({ theme }) => theme['gray-300']};

		button {
			height: 3.3rem;
			width: 4rem;
			font-size: 0;
			border: 0;
			background: ${({ theme }) => theme['gray-500']};
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.8;
			}

			svg {
				color: ${({ theme }) => theme['gray-100']};
			}
		}

		span {
			font-size: 1.4rem;
		}
	}
`;
