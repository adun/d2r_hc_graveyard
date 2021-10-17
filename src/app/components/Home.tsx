import React from "react";
import styled from "styled-components";

import Player from "./Player";

const players = [
  {
    id: 1,
    name: "Adun",
    characters: [
      {
        id: 1,
        role: "amazon",
        level: 21,
        name: "Derp",
        killer: "Boneash",
        timestamp: Date.now(),
      },
    ],
  },
  {
    id: 2,
    name: "Askyoh",
    characters: [
      {
        id: 2,
        role: "necromancer",
        level: 12,
        name: "test",
        killer: "Boneash",
        timestamp: Date.now(),
      },
      {
        id: 3,
        role: "sorceress",
        level: 28,
        name: "MemePasMort",
        killer: "Diablo",
        timestamp: Date.now(),
      },
    ],
  },
  {
    id: 3,
    name: "Seikyuu",
    characters: [
      {
        id: 4,
        role: "assassin",
        level: 60,
        name: "Anubis",
        killer: "Boneash",
        timestamp: Date.now(),
      },
    ],
  },
  {
    id: 4,
    name: "Thomas",
    characters: [
      {
        id: 5,
        role: "paladin",
        level: 19,
        name: "mofo",
        killer: "Baal",
        timestamp: Date.now(),
      },
      {
        id: 6,
        role: "druid",
        level: 99,
        name: "Panoramix",
        killer: "Duriel",
        timestamp: Date.now(),
      },
      {
        id: 7,
        role: "barbarian",
        level: 60,
        name: "Anubis",
        killer: "Andariel",
        timestamp: Date.now(),
      },
    ],
  },
];

function Home() {
  return (
    <Container>
      {players.map((player) => (
        <Player
          key={player.id}
          name={player.name}
          characters={player.characters}
        />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin: 5px 10px;
  column-count: ${players.length};
  column-width: auto;
  column-gap: 20px;
`;
