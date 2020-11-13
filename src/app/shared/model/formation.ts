import {Theme} from './theme';
import {Formateur} from './formateur';

export class Formation {
  id: number;
  libelle: string;
  dateDebutPrevu: Date;
  dateFinPrevu: Date;
  dateDebutReel: Date;
  dateFinReel: Date;
  nbrHeur: number;
  prix: number;
  statusFormation: string;
  theme: Theme;
  formateur: Formateur;
}
