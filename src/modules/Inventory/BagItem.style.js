import styled, { css } from "styled-components";

const StyledBagItem = styled.div`
  ${props => {
    const { isDragging } = props;
    return css`
      /* position: absolute; */
      width: 80px;
      height: 80px;
      border: 0 !important;
      opacity: ${isDragging ? 0 : 1};
      height: ${isDragging ? 0 : ""};
      cursor: grab;
      img {
        max-width: 100%;
      }
      .item-meta {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 11px;
        width: 100%;
        color: gold;
        padding: 0 2px;
        text-shadow: 1px 1px 0px black;
        text-align: left;
        font-weight: bold;
      }
    `;
  }}
`;

StyledBagItem.displayName = "StyledBagItem";

export default StyledBagItem;
