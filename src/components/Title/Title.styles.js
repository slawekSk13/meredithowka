import styled from "styled-components";

const TitleStyled = styled.h2`
  text-align: center;
  font-size: ${(props) =>
          props.size === "big" ? "2.5rem" : props.size === "mid" ? "1.8rem" : "1.2rem"};
  text-transform: ${(props) => (props.up === true ? "uppercase" : "none")};
  font-weight: ${(props) => (props.thick ? "500" : "300")};
  margin-bottom: 2rem;
  color: ${(props) =>
          props.light === true
                  ? props.colors.primaryColor
                  : props.colors.secondaryColor};
  @media (min-width: 400px) {
    font-size: ${(props) =>
            props.size === "big" ? "3rem" : props.size === "mid" ? "2rem" : "1.5rem"};
  }
  @media (min-width: 768px) {
    font-size: ${(props) =>
            props.size === "big" ? "6rem" : props.size === "mid" ? "4rem" : "3rem"};
  }
  @media (min-width: 990px) {
    font-size: ${(props) =>
            props.size === "big" ? "8rem" : props.size === "mid" ? "5rem" : "3rem"};
  }
`;

export {TitleStyled};
