import styled from "styled-components"

const PlayedListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
`

export const TittleNoResultStyled = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.common.grey20};
  text-align: center;
`

export default PlayedListStyled
