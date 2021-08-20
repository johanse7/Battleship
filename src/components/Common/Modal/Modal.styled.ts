import styled from "styled-components"
import { respondTo } from "../../../theme/base/mixins"

const ModalStyled = styled.section`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  box-sizing: border-box;

  & .modal-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & .modal-close {
    position: absolute;
    right: 15px;
    top: 10px;
    color: ${({ theme }) => theme.palette.common.grey90};
    cursor: pointer;
    font-size: 1.9rem;
    padding: 7px;
    background: rgba(255, 255, 255, 0.749);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
  }

  & .modal-body {
    z-index: 2;
    position: relative;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100%;

    ${respondTo.sm`
      max-width: 600px;
  `}
  }
`

export default ModalStyled
