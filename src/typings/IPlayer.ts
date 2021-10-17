import { ICharacter } from "./ICharacter";

export interface IPlayer {
  name: string;
  characters: ICharacter[];
}
