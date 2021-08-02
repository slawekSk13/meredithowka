import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: transparent;
  padding: .4rem 1.5rem;
  font-size: 1.5rem;
  border: 2px solid ${(props) => props.colors.primaryColor};
  color: ${(props) => props.colors.primaryColor};
  border-radius: 3px 9px;
  margin: 1rem;
  transition: .4s;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.colors.primaryColor};
    color: ${(props) => props.colors.secondaryColor};
  }
`;

export {ButtonStyled}