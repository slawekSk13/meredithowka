import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: transparent;
  padding: .4rem 1.5rem;
  font-size: 1.5rem;
  border: ${(props) => props.reversed ? 'none' : `2px solid ${props.colors.primaryColor}`};
  color: ${(props) => props.reversed ? props.colors.secondaryColor : props.colors.primaryColor};
  border-radius: 3px 9px;
  margin: 1rem;
  transition: .4s;
  text-decoration: none;
  width: ${props => props.reversed ? '25rem' : 'auto'};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.reversed ? props.colors.secondaryColor : props.colors.primaryColor};
    color: ${(props) => props.reversed ? props.colors.primaryColor : props.colors.secondaryColor};
  }
`;

export {ButtonStyled}