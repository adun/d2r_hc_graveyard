import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../../atoms/modalAtom";
import close from "../../assets/images/close-icon.svg";
import moment from "moment";
import { playerState } from "../../atoms/playerState";
import { MouseEvent } from "hoist-non-react-statics/node_modules/@types/react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [playerId, setPlayerId] = useRecoilState(playerState);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("amazon");
  const [level, setLevel] = useState(0);
  const [killer, setKiller] = useState("");
  const [deathtime, setDeathtime] = useState("");

  const reset = (event: MouseEvent) => {
    event.preventDefault();

    setName("");
    setRole("");
    setLevel(0);
    setKiller("");
    setDeathtime("");
    setLoading(false);
    setOpen(false);
    setPlayerId("");
  };

  const handleSubmit = async () => {
    console.log("handleSubmit");

    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(
      collection(db, "players", playerId, "characters"),
      {
        role: role,
        level: level,
        name: name,
        killer: killer,
        timestamp: new Date(deathtime),
      }
    );

    console.log("New doc added with id: ", docRef.id);

    setLoading(false);
    setOpen(false);
    setPlayerId("");
  };

  return (
    <>
      {open && (
        <Container>
          <Content>
            <Header>
              <h2>Add an unpleasant death</h2>
              <button onClick={(e) => reset(e)}>
                <img src={close} alt="close" />
              </button>
            </Header>
            <Form>
              <Input
                placeholder="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Select
                placeholder="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value.toLowerCase())}
              >
                <option>Amazon</option>
                <option>Assassin</option>
                <option>Barbarian</option>
                <option>Druid</option>
                <option>Necromancer</option>
                <option>Paladin</option>
                <option>Sorceress</option>
              </Select>
              <Input
                placeholder="level"
                type="number"
                required
                min={1}
                max={99}
                value={level}
                onChange={(e) => setLevel(e.target.valueAsNumber)}
              />
              <Input
                placeholder="killer"
                type="text"
                required
                value={killer}
                onChange={(e) => setKiller(e.target.value)}
              />
              <Input
                placeholder="deathtime"
                type="date"
                required
                data-date
                max={moment().format("YYYY-MM-DD")}
                value={deathtime}
                onChange={(e) => setDeathtime(e.target.value)}
              />
              <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </Form>
          </Content>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);

    svg,
    img {
      pointer-events: none;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 16px 12px;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 12px 24px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 12px 24px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export default Modal;
