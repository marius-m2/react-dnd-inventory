import { Types, itemDictionary } from "../config";
import * as R from "ramda";

export const RACES = {
  elven: "ELF",
  humanoid: "HUMAN",
  angel: "ANGEL",
  demon: "DEMON",
  vampire: "VAMPIRE",
  wolf: "WOLF"
};

export const RANKS = {
  Private: "Private",
  "Private First Class": "Private First Class",
  Specialist: "Specialist",
  Corporal: "Corporal",
  Sergeant: "Sergeant",
  "Staff Sergeant": "Staff Sergeant",
  "Sergeant First Class": "Sergeant First Class",
  "Master Sergeant": "Master Sergeant",
  "First Sergeant": "First Sergeant",
  "Sergeant Major": "Sergeant Major",
  "Command Sergeant Major": "Command Sergeant Major",
  "Sergeant Major of the Army": "Sergeant Major of the Army"
};

export const playerItemSlots = {
 
  left: [Types.HEAD, Types.CHEST, Types.PANTS, Types.FEET],
  right: [Types.MAIN_HAND, Types.OFF_HAND, Types.RING, Types.AMULET]
};
playerItemSlots.all = [...playerItemSlots.left, ...playerItemSlots.right];

const initialAttributes = {
  strength: 0,
  agility: 0,
  inteligence: 0,
  attack: 0,
  armor: 0,
  health: 100
};

export const getAttributes = items => {
  const data = R.map(
    slot => R.prop("attributes", itemDictionary[R.path([slot, "id"], items)]),
    playerItemSlots.all
  );

  return R.reduce(
    (acc, value) => {
      return R.mergeWith((a, b) => a + b, acc, value || {});
    },
    initialAttributes,
    data
  );
};
