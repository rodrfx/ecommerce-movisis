import styled from 'styled-components';

export const Container = styled.section`
	background: ${({ theme }) => theme['gray-700']};
	border-radius: 8px;
	padding: 1.6rem;
	overflow: hidden;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme['gray-400']};
	font-size: 2rem;
	line-height: 1.5;
	margin-bottom: 1.5rem;
`;

export const ProductDetail = styled.div`
	display: flex;
	justify-content: space-between;

	&:nth-of-type(3) {
		border-bottom: 1px solid ${({ theme }) => theme['gray-600']};
	}

	p {
		font-size: 1.4rem;
		line-height: 1.8;
		margin-bottom: 0.5rem;
	}
`;

export const TotalSum = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		font-size: 2rem;
		line-height: 1.6;
		font-weight: 500;
		margin: 1rem 0;
	}
`;

export const Button = styled.button`
	background-color: ${({ theme }) => theme['green-500']};
	font-weight: 700;
	border: 0;
	border-radius: 2px;
	height: 3.5rem;
	margin-top: 1rem;
	color: ${({ theme }) => theme['gray-100']};
	transition: opacity 0.2s;
	width: 100%;

	&:hover {
		opacity: 0.8;
	}
`;
