import styled from 'styled-components';

export const Container = styled.div`
	max-width: 128rem;
	margin: 2rem auto 0;
	padding-inline: 1rem;

	display: grid;
	grid-template-columns: 256px 1fr;
	gap: 2rem;
	align-items: flex-start;

	@media (max-width: 768.8px) {
		grid-template-columns: 1fr;
	}
`;
