import styled from "styled-components";

const ListStyled = styled.ul`
  width: 80%;
  margin: 0 auto;
@media (min-width: 768px) {
    width: 40%;
}
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1400px) {
    width: 18%;
  }
`;

export {ListStyled}