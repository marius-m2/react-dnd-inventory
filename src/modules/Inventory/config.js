import uuid from "uuid/v4";
import bastardSword from "../../assets/bastard-sword.png";
import carrot from "../../assets/carrot.png";
import armor from "../../assets/armor.png";
import brokenAxe from "../../assets/broken-axe.png";

const foodTypes = {
  WILD_FOOD: "wild food",
  FARM_FOOD: "farm food",
  HUNTING_FOOD: "venison"
};

export const Types = {
  YELLOW: "yellow",
  BLUE: "blue",
  HEAD: "head",
  CHEST: "chest",
  HANDS: "hands",
  ONE_HAND: "one hand",
  TWO_HAND: "two hand",
  PANTS: "pants",
  FEET: "feet",
  ...foodTypes
};

export const itemDictionary = {
  5: {
    id: 5,
    name: "Chest Plate",
    stackable: false,
    type: Types.CHEST,
    image: armor,
    attributes: {
      health: 5,
      armor: 5
    }
  },
  6: {
    id: 6,
    name: "Carrot",
    stackable: true,
    type: Types.FARM_FOOD,
    image: carrot,
    attributes: {
      health: 1
    }
  },
  7: {
    id: 7,
    name: "Broken Axe",
    attributes: {
      attack: 1
    },
    image: brokenAxe,
    stackable: false,
    type: Types.ONE_HAND
  },
  8: {
    id: 8,
    name: "Bastard Sword",
    stackable: false,
    image: bastardSword,
    attributes: {
      // to be moved to some sort of interface
      attack: 2
    },
    type: Types.ONE_HAND
  },
  9: {
    id: 9,
    name: "Silver Plate",
    stackable: false,
    type: Types.CHEST,
    image: armor,
    attributes: {
      health: 5,
      armor: 5
    }
  },
};

export const enchantDictionary = {
  17: {
    name: "Purple Glow"
  }
};

export const bagConfig = {
  bagBoxes: [...Array(18).keys()]
};

export default Types;
