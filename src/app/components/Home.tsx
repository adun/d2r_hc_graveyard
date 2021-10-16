import React from "react";
import styled from "styled-components";

import Player from "./Player";

function Home() {
  return (
    <Container>
      <Player name="Adun" />
      <Player name="Askyoh" />
      <Player name="Seikyuu" />
      <Player name="Thomas" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin: 5px 10px;
  column-count: auto;
  column-width: calc(20vw);
  column-gap: 20px;
`;
