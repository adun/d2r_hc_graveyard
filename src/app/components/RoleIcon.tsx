import styled from "styled-components";

interface IRoleIcon {
  role: string;
}

function RoleIcon(props: IRoleIcon) {
  let src = require(`../../assets/images/${props.role}.png`).default;

  return <div>{src && <Image src={src} alt={props.role} />}</div>;
}

const Image = styled.img`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

export default RoleIcon;
