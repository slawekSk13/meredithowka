import styled from "styled-components";

const TitleStyled = styled.h2`
  font-size: ${(props) =>
    props.size === "big" ? "4rem" : props.size === "mid" ? "3rem" : "2rem"};
  text-transform: ${(props) => (props.up === true ? "uppercase" : "none")};
  font-weight: ${(props) => (props.size === "big" || "mid" ? "700" : "300")};
  font-family: "Calibri", sans-serif;
  margin-bottom: 2rem;
  color: ${(props) =>
    props.light === true
      ? props.colors.primaryColor
      : props.colors.secondaryColor};
`;

export { TitleStyled };
