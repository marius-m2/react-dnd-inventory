import React from "react";

import * as R from "ramda";
import BagBox from "./BagBox";
import BagItem from "./BagItem";

import { bagConfig, itemDictionary } from "../config";

import { isBlank } from "../helpers";
import StyledInventory from "./Inventory.style";
import Frame from "../frame/Frame";

class Inventory extends React.Component {
  render() {
    const { items, updateItemOrder } = this.props;
    return (
      <StyledInventory>
        <Frame>
          <div className="boxes-grid">
            {bagConfig.bagBoxes.map(bagId => {
              const item = itemDictionary[R.path([bagId, "id"], items)];

              return (
                <BagBox
                  bagId={bagId}
                  key={bagId}
                  hasItem={!isBlank(item)}
                  updateItemOrder={updateItemOrder}
                >
                  {item && (
                    <BagItem
                      key={`${bagId}${item.name}`}
                      bagId={bagId}
                      count={R.path([bagId, "count"], items)}
                      item={item}
                    />
                  )}
                </BagBox>
              );
            })}
          </div>
        </Frame>
      </StyledInventory>
    );
  }
}

export default Inventory;
