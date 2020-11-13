import {Personne} from './personne';
import {Theme} from './theme';
import {FormateurTheme} from './formateurTheme';

export class Formateur extends Personne{
  formateurThemes: FormateurTheme[];
}
