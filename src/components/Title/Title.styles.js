import styled from "styled-components";

const TitleStyled = styled.h2`
  text-align: center;
  font-size: ${(props) =>
          props.big ? "2.5rem" : props.small ? "1.2rem" : "1.8rem"};
  text-transform: ${(props) => (props.up ? "uppercase" : "none")};
  font-weight: ${(props) => (props.thick ? "500" : "300")};
  margin-bottom: 2rem;
  color: ${(props) =>
          props.light
                  ? props.colors.primaryColor
                  : props.colors.secondaryColor};
  @media (min-width: 400px) {
    font-size: ${(props) =>
            props.big ? "4rem" : props.small ? "2rem" : "3rem"};
  }
`;

export {TitleStyled};