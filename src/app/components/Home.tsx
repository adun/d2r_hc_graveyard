import React from "react";
import styled from "styled-components";

import Card from "./Card";

function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
