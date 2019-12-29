import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as R from "ramda";
import BagBox from "./BagBox";
import PlayerBox from "./PlayerBox";
import BagItem from "./BagItem";

import { Types, bagConfig, itemDictionary } from "./config";
import CustomDragLayer from "./CustomDragLayer";

const isBlank = x => R.isNil(x) || R.isEmpty(x);

const bagBoxesStyles = {
  display: "flex",
  maxWidth: "515px",
  flexWrap: "wrap",
  justifyContent: "space-between",
  position: "relative"
};

const playerBoxesStyles = {
  display: "flex"
};

// this would likely be followed by an api call to retrieve item data from those id's.
// check if inventory contains the sent id's and return
const items = {
  0: { id: 5 },
  1: { id: 6, count: 2 },
  2: { id: 6, count: 12 },
  7: { id: 6, count: 1 },
  3: { id: 7 },
  4: { id: 9 },
  6: { id: 8 }
};

const canStack = (id1, id2, isStackable) => id1 === id2 && isStackable;

const playerItemSlots = [
  Types.HEAD,
  Types.CHEST,
  Types.HANDS,
  Types.PANTS,
  Types.FEET,
  Types.ONE_HAND
];

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items
    };
  }

  updateItemOrder = (bagId, dragItem) => {
    const items = this.state.items;
    const target = items[bagId]; // the box we're droping to
    const origin = R.clone(items[dragItem.bagId]);
    const shouldStack = canStack(
      R.prop("id", target),
      R.prop("id", origin),
      R.path([R.prop("id", target), "stackable"], itemDictionary)
    );
    if (target) {
      if (dragItem.isEquiped && target.type !== dragItem.type) {
        return false;
      }
      // if we have an item in it
      if (shouldStack) {
        origin.count += target.count;
        delete items[dragItem.bagId];
      } else {
        items[dragItem.bagId] = target; // move that item to the drag past location
      }
    } else {
      delete items[dragItem.bagId]; // otherwise remove the previous reference
    }
    items[bagId] = origin; // move the actual drag item to new bag
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <DndProvider backend={Backend}>
          <div>
            <p>Bag Boxes</p>
            <div style={bagBoxesStyles} className="bag-boxes-container">
              <CustomDragLayer />

              {bagConfig.bagBoxes.map(bagId => {
                const item = itemDictionary[R.path([bagId, "id"], items)];

                return (
                  <BagBox
                    bagId={bagId}
                    key={bagId}
                    hasItem={!isBlank(item)}
                    updateItemOrder={this.updateItemOrder}
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
            <div>Player Boxes</div>
            <div style={playerBoxesStyles} className="player-boxes-container">
              {playerItemSlots.map(type => (
                <BagBox
                  bagId={type}
                  accept={type}
                  updateItemOrder={this.updateItemOrder}
                >
                  {items[type] && (
                    <BagItem
                      isEquiped
                      item={itemDictionary[items[type].id]}
                      key={type}
                      bagId={type}
                    />
                  )}
                </BagBox>
              ))}
            </div>
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default Inventory;
