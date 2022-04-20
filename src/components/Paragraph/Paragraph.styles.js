import styled from "styled-components";

const ParagraphStyled = styled.p`
  font-size: ${props => props.small ? '1rem' : '1.2rem'};
margin-bottom: 2rem;
  line-height: 1.4;
  width: ${props => props.small ? '60%' : '100%'};
  // @media (min-width: 768px) {
  //   font-size: ${props => props.small ? '1rem' : '1.2rem'};
  // }
  // @media (min-width: 990px) {
  //   font-size: ${props => props.small ? '1.2rem' : '1.8rem'};
  // }
`;

export {ParagraphStyled}