import styled from 'styled-components';

export const Container = styled.aside`
	background: ${({ theme }) => theme['gray-700']};
	border-radius: 8px;
	padding: 1.6rem;
	overflow: hidden;

	h1 {
		color: ${({ theme }) => theme['gray-100']};
		font-size: 2rem;
		line-height: 1.6;
		position: relative;

		&:after {
			content: '';
			height: 1px;
			width: 100%;
			background-color: ${({ theme }) => theme['gray-600']};
			position: absolute;
			bottom: -8px;
			left: 0;
		}
	}

	div {
		margin-top: 2rem;

		h2 {
			margin-bottom: 0.5rem;
		}

		p {
			color: ${({ theme }) => theme['gray-400']};
			font-size: 1.3rem;
			line-height: 2;
		}

		input,
		select {
			background: ${({ theme }) => theme['gray-900']};
			color: ${({ theme }) => theme['gray-400']};
			border-radius: 2px;
			padding-inline-start: 1rem;
			border: 0;
			font-size: 1.4rem;
			width: 100%;
			height: 3.5rem;
		}
	}
`;
