import styled from "styled-components"
import { displays } from "../../../theme/base/Variables"

export const MainContent = styled.main`
  ${displays.flexColumn};
  align-items: stretch;
  gap: 1rem;
  margin: 0 auto;
  max-width: 920px;
  padding: 1rem;
`
