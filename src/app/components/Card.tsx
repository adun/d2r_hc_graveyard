import styled from "styled-components";
import Character from "./Character";

function Card() {
  return (
    <Container>
      <Left>
        <Character role="assassin" />
        <p>LVL-27</p>
      </Left>
      <Right>
        <p>Sample Name</p>
        <p>
          <i>Killed by</i> Diablo
        </p>
        <p>2021-09-15</p>
      </Right>
      {/*
      <Character role="assassin" />
      <Character role="barbarian" />
      <Character role="druid" />
      <Character role="necromancer" />
      <Character role="paladin" />
      <Character role="sorceress" />
      */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  margin: 0 0 1em 0;
  padding: 0 10px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    text-align: center;
  }
`;

export default Card;
