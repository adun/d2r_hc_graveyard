import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import ghost from "../../assets/images/ghost.png";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";
import { IPlayer } from "../../typings/IPlayer";

function Player(props: IPlayer) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "players", props.playerId, "characters"),
          orderBy("timestamp", "desc")
        ),

        (snapshot) => {
          setCharacters(snapshot.docs);
        }
      ),
    [props.playerId]
  );

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
    <Container>
      <PlayerName>
        <img src={ghost} alt="ghost" />
        <p>{props.name}</p>
      </PlayerName>
      <CharacterList>
        {characters.map((character) => (
          <Character
            key={character.id}
            role={character.data().role}
            level={character.data().level}
            name={character.data().name}
            killer={character.data().killer}
            timestamp={character.data().timestamp}
          />
        ))}
        <AddButton type="submit" onClick={addCard}>
          +
        </AddButton>
      </CharacterList>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

const CharacterList = styled.div`
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
  height: 80px;

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

const AddButton = styled.button`
  display: block;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  font-family: unset;
  border-radius: 20%;

  height: 60px;
  width: 60px;
  line-height: 60px;
  font-size: 4em;
  font-weight: bold;
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: #aaa;
    cursor: pointer;
  }

  &:active {
    background-color: #666;
    color: #eee;
  }
`;

export default Player;
