import React, { useEffect, useCallback, memo } from "react";
import { useDrag } from "react-dnd";
import StyledBagItem from "./BagItem.style";
import { getEmptyImage } from 'react-dnd-html5-backend'


const BagItem = ({ color, item, bagId, count, isEquiped }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: Object.assign(item, { bagId, isEquiped }),
    canDrag: true,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  return (
    <StyledBagItem
      ref={drag}
      isDragging={isDragging}
    >
      <img src={item.image} />
      <div className="item-meta">
        <span>{item.name}</span>
        {count && count > 1 && <span className="item-count"> x {count}</span>}
      </div>
    </StyledBagItem>
  );
};

export default memo(BagItem);
