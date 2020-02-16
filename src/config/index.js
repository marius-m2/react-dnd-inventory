import bastardSword from "../assets/weapons/sv_t_09.png";
import potion from "../assets/potion.png";
import armor from "../assets/armor.png";
import brokenAxe from "../assets/weapons/axe_t_09.png";
import mjolnir from "../assets/weapons/hm_t_10.png";
import shield from "../assets/weapons/shield_t_01.png";
import setChest from "../assets/armor/chest.PNG";
import setHead from "../assets/armor/head.PNG";
import setFeet from "../assets/armor/feet.PNG";
import setPants from "../assets/armor/pants.PNG";

import amulet from "../assets/jewlery/necklace_5.PNG";
import ring from "../assets/jewlery/rings_7.PNG";

const foodTypes = {
  WILD_FOOD: "wild food",
  FARM_FOOD: "farm food",
  HUNTING_FOOD: "venison"
};

const usableTypes = {
  POTION: "potion"
};
export const Types = {
  HEAD: "head",
  CHEST: "chest",
  HANDS: "hands",
  WEAPON: "WEAPON",
  MAIN_HAND: "main-hand",
  OFF_HAND: "off-hand",
  RING: "ring",
  AMULET: "amulet",
  PANTS: "pants",
  FEET: "feet",
  ...foodTypes,
  ...usableTypes
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
    name: "Potion",
    stackable: true,
    type: Types.POTION,
    image: potion,
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
    type: Types.WEAPON
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
    type: Types.WEAPON
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
  10: {
    id: 10,
    name: "Iron Chest Plate",
    stackable: false,
    type: Types.CHEST,
    image: setChest,
    attributes: {
      health: 5,
      armor: 5
    }
  },
  11: {
    id: 11,
    name: "Iron Helmet",
    stackable: false,
    type: Types.HEAD,
    image: setHead,
    attributes: {
      health: 5,
      armor: 5,
      inteligence: 1
    }
  },
  12: {
    id: 12,
    name: "Iron Feet",
    stackable: false,
    type: Types.FEET,
    image: setFeet,
    attributes: {
      health: 5,
      armor: 5,
      strength: 2,
      agility: 1
    }
  },
  13: {
    id: 13,
    name: "Iron Pants",
    stackable: false,
    type: Types.PANTS,
    image: setPants,
    attributes: {
      health: 5,
      armor: 5
    }
  },
  14: {
    id: 14,
    name: "Mjolnir",
    stackable: false,
    type: Types.WEAPON,
    image: mjolnir,
    attributes: {
      health: 5,
      attack: 25
    }
  },
  15: {
    id: 15,
    name: "Wooden Shield",
    stackable: false,
    type: Types.WEAPON,
    image: shield,
    attributes: {
      health: 25,
      armor: 25
    }
  },
  16: {
    id: 16,
    name: "Norse Ring",
    stackable: false,
    type: Types.RING,
    image: ring,
    attributes: {
      health: 2,
      armor: 2,
      strength: 3,
      agility: 5,
      inteligence: 6,
    }
  },
  17: {
    id: 17,
    name: "Runic Necklace",
    stackable: false,
    type: Types.AMULET,
    image: amulet,
    attributes: {
      health: 2,
      armor: 2,
      strength: 3,
      agility: 5,
      inteligence: 6,
    }
  }
};
