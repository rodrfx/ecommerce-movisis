import styled from 'styled-components';

export const Container = styled.li`
	display: flex;
	flex-direction: column;
	border-radius: 4px;

	img {
		max-width: 100%;
		object-fit: cover;
		width: 300px;
		height: 300px;
	}

	p {
		margin: 0.5rem 0;
	}

	p:nth-of-type(1) {
		font-size: 1.4rem;
		line-height: 1.6;
		color: ${({ theme }) => theme['gray-400']};
	}

	p:nth-of-type(2) {
		font-size: 2rem;
		line-height: 1;
		font-weight: 700;
	}

	button {
		background-color: ${({ theme }) => theme['green-500']};
		text-transform: uppercase;
		font-weight: 700;
		border: 0;
		border-radius: 2px;
		height: 3.3rem;
		margin-top: 1rem;
		color: ${({ theme }) => theme['gray-100']};
		transition: opacity 0.2s;

		&:hover {
			opacity: 0.8;
		}
	}

	@media (max-width: 667px) {
		width: 100%;
	}
`;
