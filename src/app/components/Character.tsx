import styled from "styled-components";

interface ICharacter {
  role: string;
}

function Character({ role }: ICharacter) {
  let src = require(`../../assets/images/${role}.png`).default;

  return <div>{src && <Image src={src} alt={role} />}</div>;
}

const Image = styled.img`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

export default Character;
