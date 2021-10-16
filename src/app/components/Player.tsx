import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ghost from "../../assets/images/ghost.png";
import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

interface IPlayer {
  name: String;
}

function Player(props: IPlayer) {
  const [loading, setLoading] = useState(false);

  const addCard = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "cards"), {
      role: "paladin",
      level: 10,
      name: "test",
      killer: "Boneash",
      timestamp: Date.now(),
    });

    console.log("New doc added with id: ", docRef.id);

    setLoading(false);
  };

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
      <button type="submit" onClick={addCard}>
        Add Card
      </button>
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
