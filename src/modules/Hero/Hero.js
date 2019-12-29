import React from "react";
import StyledHero from "./Hero.style";
import elfProfilePicture from "../../assets/elf-1.jpg";
import Button from "@material-ui/core/Button";

const RACES = {
  elven: "ELF",
  humanoid: "HUMAN",
  angel: "ANGEL",
  demon: "DEMON",
  vampire: "VAMPIRE",
  wolf: "WOLF"
};

const RANKS = {
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

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mio",
      level: 0,
      experience: 0,
      race: RACES.elven,
      picture: elfProfilePicture,
      rank: RANKS.Private,
      attributes: {
        strength: 0,
        agility: 0,
        inteligence: 0
      }
    };
  }
  render() {
    const { picture, name, attributes, rank, level, experience } = this.state;
    return (
      <StyledHero>
        <div className="hero-frame">
          <img src={picture} alt="profile picture" />
          <div className="hero-name">{name}</div>
          <div>
            <Button>+</Button>Rank [{rank}]
          </div>
          <div>
            <Button>+</Button>Level [{level}]
          </div>
          <div>
            <Button>+</Button>Experience [{experience}]
          </div>
        </div>
        <div className="hero-attributes">
          <ul>
            <li>
              <Button>+</Button> Strength [{attributes.strength}]
            </li>
            <li>
              <Button>+</Button> Agility [{attributes.agility}]
            </li>
            <li>
              <Button>+</Button> Inteligence [{attributes.inteligence}]
            </li>
          </ul>
        </div>

      </StyledHero>
    );
  }
}

export default Hero;
