import {Personne} from './personne';

export class User extends Personne {
  username: string;
  password: string;
  enabled: boolean;
  role: string;
}
