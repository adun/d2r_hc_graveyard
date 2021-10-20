import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import Player from "./Player";

var cols = 0;

function Home() {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "players"), orderBy("name")),
        (snapshot) => {
          cols = snapshot.docs.length;
          setPlayers(snapshot.docs);
        }
      ),
    []
  );

  return (
    <Container>
      {players.map((player) => (
        <Column key={player.id}>
          <Player
            key={player.id}
            playerId={player.id}
            name={player.data().name}
          />
        </Column>
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: ${cols}%;
  background-color: aliceblue;
  margin: 0 10px;
`;
