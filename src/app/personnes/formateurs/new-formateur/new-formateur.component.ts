import {Component, OnInit} from '@angular/core';
import {Formateur} from '../../../shared/model/formateur';
import {FormateurService} from '../../../shared/services/formateurService';
import {MessageService} from '../../../shared/services/message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../shared/services/theme.service';
import {Theme} from '../../../shared/model/theme';

@Component({
  selector: 'app-new-formateur',
  templateUrl: './new-formateur.component.html',
  styleUrls: ['./new-formateur.component.scss']
})
export class NewFormateurComponent implements OnInit {
  formateur = new Formateur();
  id;
  title;
  themes: Theme[];
  selectedThemes;

  constructor(private formateurService: FormateurService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getById();
      this.title = 'Editer formateur';
    } else {
      this.title = 'Nouveau formateur';
    }
    this.getAllTheme();
  }

  getAllTheme() {
    this.themeService.getAll().subscribe(data => {
      this.themes = data;
    /*  if (this.id) {
        this.selectedThemes = [];
        this.formateur.formateurThemes.forEach(ft => {
          const index = this.themes.findIndex(t => t.id === ft.theme.id);
          this.selectedThemes.push(this.themes[index]);
        });
      }*/
    }, ex => console.log(ex));
  }

  getById() {
    this.formateurService.findById(this.id).subscribe(data => {
      this.formateur = data;
      this.selectedThemes = this.formateur.formateurThemes.map(ft => {
        return ft.theme;
      });
    }, error => {
      console.log(error);
    });
  }

  valider() {
    if (this.id) {
      this.updateFormateur();
    } else {
      this.addFormateur();
    }
  }

  annuler() {
    if (this.id) {
      this.getById();
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  private addFormateur() {
    const formateurThemes = {formateur: this.formateur, themes: this.selectedThemes};
    this.formateurService.addFormateur(formateurThemes)
      .subscribe(res => {
        if (res.success) {
          this.messageService.success(res.message, res.detail);
          this.router.navigate(['/app/personnes/formateur']);
        } else {
          this.messageService.warning(res.message, res.detail);
        }
      }, ex => {
        this.messageService.error('Erreur', 'Opération non effectuée');
        console.log(ex);
      });
  }

  private updateFormateur() {
    const formateurThemes = {formateur: this.formateur, themes: this.selectedThemes};
    this.formateurService.updateFormateur(formateurThemes).subscribe(res => {
      if (res.success) {
        this.messageService.success(res.message, res.detail);
        this.router.navigate(['/app/personnes/formateur']);
      } else {
        this.messageService.warning(res.message, res.detail);
      }
    }, ex => {
      this.messageService.error('Erreur', 'Opération non effectuée');
      console.log(ex);
    });
  }

  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.id === o2.id : o1 === o2);
}
