import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Character from "./Character";
import ghost from "../../assets/images/ghost.png";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { IPlayer } from "../../typings/IPlayer";
import { modalState } from "../../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { playerState } from "../../atoms/playerState";

function Player(props: IPlayer) {
  const [characters, setCharacters] = useState<any[]>([]);
  const [open, setOpen] = useRecoilState(modalState);
  const [playerId, setPlayerId] = useRecoilState(playerState);

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

  const handleOpenModal = () => {
    setOpen(true);
    setPlayerId(props.playerId);
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
        <PlusCircleIcon onClick={() => handleOpenModal()}>+</PlusCircleIcon>
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

const PlusCircleIcon = styled.button`
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
