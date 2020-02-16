import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as R from "ramda";
import { Types, bagConfig, itemDictionary } from "./config";
import DragLayer from "./DragLayer";
import StyledApp from "./App.style";
import { isBlank, canStack } from "./helpers";
import Inventory from "./inventory";
import Hero from './hero';

// this would likely be followed by an api call to retrieve item data from those id's.
const items = {
  3: { id: 7 },
  6: { id: 8 },
  7: { id: 10 },
  8: { id: 11 },
  9: { id: 12 },
  10: { id: 13 },
  11: { id: 14 },
  12: { id: 15 },
  13: { id: 16 },
  14: { id: 17 }
};

class App extends React.Component {
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
      <StyledApp>
        <DndProvider backend={Backend}>
          <DragLayer />
          <Hero items={items} updateItemOrder={this.updateItemOrder}/>
          <Inventory items={items} updateItemOrder={this.updateItemOrder} />
        </DndProvider>
      </StyledApp>
    );
  }
}

export default App;
