import styled from "styled-components";

const SectionStyled = styled.section`
  min-height: 100vh;
  padding: 5% 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  background: url(${(props) => props.backgroundImage}) no-repeat center fixed;
  background-size: cover;
  background-color: ${(props) => props.colors.primaryColor};
`;

export {SectionStyled};
