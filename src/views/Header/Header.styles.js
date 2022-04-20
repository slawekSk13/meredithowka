import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: rgb(238, 238, 238);
  width: 100%;
  position: fixed;
  z-index: 15;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  visibility: ${props => props.mobile ? 'visible' : 'hidden'};
  @media (min-width: 768px) {
      flex-direction: row;
      visibility: visible;
    }
`;

export {HeaderStyled}