import styled from "styled-components";

const TitleStyled = styled.h2`
  font-size: ${(props) =>
          props.big ? "2rem" : props.small ? "1.2rem" : "1.4rem"};
  text-transform: ${(props) => (props.up ? "uppercase" : "none")};
  font-weight: ${(props) => (props.thick ? "500" : "300")};
  margin-bottom: 2rem;
  color: ${(props) =>
          props.light
                  ? props.colors.primaryColor
                  : props.colors.secondaryColor};
`;

export {TitleStyled};