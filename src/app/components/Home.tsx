import React from "react";
import styled from "styled-components";
import Character from "./Character";

import amazon from "../../assets/images/amazon.png";
import assassin from "../../assets/images/assassin.png";
import barbarian from "../../assets/images/barbarian.png";
import druid from "../../assets/images/druid.png";
import paladin from "../../assets/images/paladin.png";
import necromancer from "../../assets/images/necromancer.png";
import sorceress from "../../assets/images/sorceress.png";

function Home() {
  return (
    <Container>
      <Card>
        <Character src={amazon} name="amazon" />
      </Card>
      <Card>
        <Character src={assassin} name="assassin" />
      </Card>
      <Card>
        <Character src={barbarian} name="barbarian" />
      </Card>
      <Card>
        <Character src={druid} name="druid" />
      </Card>
      <Card>
        <Character src={necromancer} name="necromancer" />
      </Card>
      <Card>
        <Character src={paladin} name="paladin" />
      </Card>
      <Card>
        <Character src={sorceress} name="sorceress" />
      </Card>
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
const Card = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
`;
