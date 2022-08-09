import styled from 'styled-components';

export const Container = styled.div`
	max-width: 128rem;
	margin: 2rem auto 0;
	padding-inline: 1rem;
`;

export const HeaderStyle = styled.header`
	h1 {
		margin-bottom: 1.6rem;
	}
`;

export const Content = styled.main`
	display: grid;
	grid-template-columns: 1fr 300px;
	gap: 2rem;
	align-items: flex-start;

	@media (max-width: 768.8px) {
		grid-template-columns: 1fr;
	}
`;
