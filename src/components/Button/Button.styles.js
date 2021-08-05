import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: transparent;
  padding: ${(props) => props.reversed ? '.4rem' : `.4rem 1.5rem`};
  font-size: 1.1rem;
  border: ${(props) => props.reversed ? 'none' : `2px solid ${props.colors.primaryColor}`};
  color: ${(props) => props.reversed ? props.colors.secondaryColor : props.colors.primaryColor};
  border-radius: 3px 9px;
  margin: .3rem;
  transition: .4s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.reversed ? props.colors.secondaryColor : props.colors.primaryColor};
    color: ${(props) => props.reversed ? props.colors.primaryColor : props.colors.secondaryColor};
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
  //@media (min-width: 1200px) {
  //  width: 20%;
  //}
`;

export {ButtonStyled}