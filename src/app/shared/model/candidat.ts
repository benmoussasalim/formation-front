import {Status} from './status';
import {Personne} from './personne';

export class Candidat extends Personne{
  dateInscrit: Date;
  dateNaissance: Date;
  cin: string;
  sexe: string;
  adresse: string;
  niveauEtude: string;
  etablissement: string;
  status: Status;
  societe: string;
}
