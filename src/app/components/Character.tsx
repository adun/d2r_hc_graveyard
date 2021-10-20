import { Timestamp } from "firebase/firestore";
import moment from "moment";
import styled from "styled-components";
import { ICharacter } from "../../typings/ICharacter";
import RoleIcon from "./RoleIcon";

function Character(props: ICharacter) {
  const formatTimestamp = (ts: Timestamp): string => {
    return moment(ts.toDate()).format("YYYY-MM-DD");
  };

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
        <p>{formatTimestamp(props.timestamp)}</p>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  break-inside: avoid;
  width: 270px;
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
  width: 80px;
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
