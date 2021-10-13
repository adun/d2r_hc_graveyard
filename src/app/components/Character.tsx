import styled from "styled-components";

interface ICharacter {
  src: string;
  name: string;
}

function Character({ src, name }: ICharacter) {
  return (
    <div>
      {src && <Image src={src} alt={name} />}
      <p>{name}</p>
    </div>
  );
}

const Image = styled.img`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

export default Character;
