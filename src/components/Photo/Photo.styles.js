import styled from "styled-components";

const PhotoStyled = styled.img`
  width: 90%;
  border-radius: 10% 30%;
  margin: 5% 2%;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: 45%;
    margin: 2%;
  }
  @media (min-width: 1200px) {
    width: 20%;
  }
`;

export {PhotoStyled}