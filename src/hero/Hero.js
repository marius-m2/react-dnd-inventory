import React from "react";
import * as R from "ramda";
import StyledHero from "./Hero.style";
import elfProfilePicture from "../assets/frame/portrait-frame-mask.png";
import { itemDictionary, Types } from "../config";
import { getAttributes, RACES, RANKS, playerItemSlots } from "./helpers";
import BagBox from "../inventory/BagBox";
import BagItem from "../inventory/BagItem";
import Frame from "../frame/Frame";

const calculateAccept = (playerSlotType) => {
  if (playerSlotType === Types.MAIN_HAND || playerSlotType === Types.OFF_HAND)
    return Types.WEAPON;

  return playerSlotType;
};

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mio",
      level: 0,
      experience: 0,
      race: RACES.elven,
      picture: elfProfilePicture,
      rank: RANKS.Private
    };
  }
  render() {
    const { picture, name, rank, level, experience } = this.state;
    const { items, updateItemOrder } = this.props;
    const attr = getAttributes(items) || {};

    return (
      <StyledHero>
        <Frame>
          <div className="boxes-grid">
            {playerItemSlots.left.map(type => (
              <BagBox
                className={`equip-${type} equip-item`}
                bagId={type}
                accept={type}
                showType
                shouldHighlight
                updateItemOrder={updateItemOrder}
                key={type}
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
        </Frame>

        <div>
          <div className="hero-frame">
            <img src={picture} alt="profile picture" />
          </div>

          <Frame className="hero-attributes">
            <ul>
              <li className="hero-name">{name}</li>
              <li>
                Rank <span>[{rank}]</span>
              </li>
              <li>
                Level <span>[{level}]</span>
              </li>
              <li>
                Experience <span>[{experience}]</span>
              </li>
              <li>
                Strength <span>[{attr.strength}]</span>
              </li>
              <li>
                Agility <span>[{attr.agility}]</span>
              </li>
              <li>
                Inteligence <span>[{attr.inteligence}]</span>
              </li>
              <li>
                Attack <span>[{attr.attack}]</span>
              </li>
              <li>
                Armor <span>[{attr.armor}]</span>
              </li>
              <li>
                Health <span>[{attr.health}]</span>
              </li>
            </ul>
          </Frame>
        </div>
        <Frame className="hero-attributes">
          <div className="boxes-grid">
            {playerItemSlots.right.map(type => {
              const accept = calculateAccept(type);
              return (
                <BagBox
                  className={`equip-${type} equip-item`}
                  bagId={type}
                  accept={accept}
                  shouldHighlight={accept}
                  showType
                  updateItemOrder={updateItemOrder}
                  key={type}
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
              );
            })}
          </div>
        </Frame>
      </StyledHero>
    );
  }
}

export default Hero;
