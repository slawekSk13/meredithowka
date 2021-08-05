import styled from "styled-components";

const HamburgerStyled = styled.span`
  color: ${props => props.colors.primaryColor};
  border-radius: 3px;
  position: fixed;
background-color: ${props => props.colors.secondaryColor};
  z-index: 15;
  padding: .3rem .4rem;
  margin: .4rem;
  font-size: 1.5rem;
`;

export {HamburgerStyled}