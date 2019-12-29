import React, { memo } from "react";

import { itemDictionary } from "./config";
import BagItem from "./BagItem";
import StyledBagItem from "./BagItem.style";

const styles = {
  display: "inline-block"
};

const BoxDragPreview = ({ itemId }) => {
  const item = itemDictionary[itemId];
  return (
    <StyledBagItem>
      <img src={item.image} />
      <div className="item-meta">
        <span>{item.name}</span>
      </div>
    </StyledBagItem>
  );
};

export default memo(BoxDragPreview);
