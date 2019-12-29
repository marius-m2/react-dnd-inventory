import styled, { css } from "styled-components";

const StyledBagBox = styled.div`
  ${props => {
    const { canDrop, isOver } = props;

    return css`
      position: relative;
      border: ${canDrop
        ? `1px solid ${isOver ? "green" : "gold"}`
        : "1px solid gray"};
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
      img {
        max-width: 100%;
      }
      > span {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 11px;
        color: black;
        font-weight: bold;
      }
    `;
  }}
`;

StyledBagBox.displayName = "StyledBagBox";

export default StyledBagBox;
