import styled, { css } from "styled-components";

const StyledHero = styled.div`
  background: #fff;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  display: flex;
  justify-content: flex-start;

  .hero-attributes {
      text-align:left;
      ul {
          list-style-type: none;
      }
  }
  .hero-frame {
    width: 20%;
    text-align: left;
    .hero-name {
        text-align: center;
    }
    img {
      max-width: 100%;
    }
  }
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

StyledHero.displayName = "StyledHero";

export default StyledHero;
