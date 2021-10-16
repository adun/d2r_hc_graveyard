import React from "react";
import styled from "styled-components";
import Card from "./Card";

import ghost from "../../assets/images/ghost.png";

interface IPlayer {
  name: String;
}

function Player(props: IPlayer) {
  return (
    <div>
      <PlayerName>
        <img src={ghost} alt="ghost" />
        <p>{props.name}</p>
      </PlayerName>
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  );
}

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlayerName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    height: 50px;
    margin-right: 5px;
  }

  p {
    text-align: center;
    font-size: 48px;
    width: auto;
    color: rgb(165, 133, 70);
  }
`;

export default Player;
