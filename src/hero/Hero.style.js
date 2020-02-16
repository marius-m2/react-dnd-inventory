import styled, { css } from "styled-components";
import frame from "../assets/frame/portrait-frame.png";
import bg from "../assets/frame/bg.jpg";

const StyledHero = styled.div`

display: flex;
justify-content: space-between;
margin-bottom: 10px;
  .player-boxes {
    width: 300px;
  }
  .boxes-grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
    background: url("${bg}") no-repeat center;
  }
  .hero-attributes {
    color: white;

    li {
      display:flex;
      justify-content: space-between;
      border-bottom: 1px dashed white;
      margin-bottom: 2px;
      span {
        color: white;
      }
    }
    .hero-name {
      border-bottom: 1px solid white;
      margin-bottom: 15px;
    }
  }
  .hero-frame {
    width: 300px;
    text-align: left;
    position: relative;
    .hero-name {
        text-align: center;
    }
    img {
      width: 95%;
      height: 300px;
      left: 15px;
    position: relative;
    }
    &:after {
      background-image: url("${frame}");
    background-repeat: no-repeat;
    content: '';
    width: 241px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 0;
    background-size: 100% 100%;
    transform: translateX(-50%);
    }
  }
`;

StyledHero.displayName = "StyledHero";

export default StyledHero;
