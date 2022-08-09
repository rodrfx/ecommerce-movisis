import styled from 'styled-components';

export const Container = styled.main`
	background: ${({ theme }) => theme['gray-700']};
	border-radius: 8px;
	padding: 1.6rem;
	overflow: hidden;
`;

export const SearchBarStyle = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	input {
		background: ${({ theme }) => theme['gray-900']};
		color: ${({ theme }) => theme['gray-400']};
		border-radius: 2px;
		padding-inline-start: 3.8rem;
		border: 0;
		font-size: 1.4rem;
		width: 100%;
		height: 3.5rem;
	}

	svg {
		background-color: ${({ theme }) => theme['gray-900']};
		position: absolute;
		left: 1rem;
	}
`;

export const Wrapper = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 2rem;
	gap: 1.6rem;
`;
