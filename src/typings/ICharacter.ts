import { Timestamp } from "firebase/firestore";

export interface ICharacter {
  role: string;
  name: string;
  level: number;
  killer: string;
  timestamp: Timestamp;
}
