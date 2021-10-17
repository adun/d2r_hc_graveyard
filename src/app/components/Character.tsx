import styled from "styled-components";
import { ICharacter } from "../../typings/ICharacter";
import RoleIcon from "./RoleIcon";

function Character(props: ICharacter) {
  return (
    <Container>
      <Left>
        <RoleIcon role={props.role} />
        <p>LVL-{props.level}</p>
      </Left>
      <Right>
        <p>{props.name}</p>
        <p>
          <i>Killed by</i> {props.killer}
        </p>
        <p>{props.timestamp}</p>
      </Right>
      {/*
        <RoleIcon role="assassin" />
        <RoleIcon role="barbarian" />
        <RoleIcon role="druid" />
        <RoleIcon role="necromancer" />
        <RoleIcon role="paladin" />
        <RoleIcon role="sorceress" />
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

export default Character;
