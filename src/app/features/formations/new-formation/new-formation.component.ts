import {Component, OnInit} from '@angular/core';
import {Formation} from '../../../shared/model/formation';
import {Status} from '../../../shared/model/status';
import {FormationService} from '../../../shared/services/formation.service';
import {MessageService} from '../../../shared/services/message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ThemeService} from '../../../shared/services/theme.service';
import {Theme} from '../../../shared/model/theme';
import {FormateurService} from '../../../shared/services/formateurService';
import {Formateur} from '../../../shared/model/formateur';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {
  formation = new Formation();
  formateurs: Formateur[];
  status = Status;
  etudiant = false;
  themes: Theme[];
  id;
  title;
  theme = new Theme();
  formateur = new Formateur();
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, new Date()) < 0;
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.formation.dateDebutPrevu) {
      return false;
    }
    return endValue.getTime() <= this.formation.dateDebutPrevu.getTime();
  };
  constructor(private formationService: FormationService,
              private themeService: ThemeService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formateurService: FormateurService) {
  }

  ngOnInit(): void {
  //  this.formation.dateDebutPrevu = new Date();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getById();
      this.title = 'Editer formation';
    } else {

      this.title = 'Nouveau formation';
    }
    this.getAllThemes();
  }

  getAllThemes() {
    this.themeService.getAll().subscribe(data => {
      this.themes = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  getById() {
    this.formationService.findById(this.id).subscribe(data => {
      this.formation = data;
      this.onItemChange();
    }, error => {
      console.log(error);
    });
  }


  valider() {
    if (this.id) {
      this.update();
    } else {
      this.addFormation();
    }

  }

  annuler() {
    if (this.id) {
      this.getById();
    }

  }


  addFormation() {
    this.formationService.addFormation(this.formation).subscribe(res => {
      if (res.success) {
        this.messageService.success(res.message, res.detail);
        this.router.navigate(['/app/features/formation']);
      } else {
        this.messageService.warning(res.message, res.detail);
      }
    }, ex => {
      this.messageService.error('Erreur', 'Opération non effectuée');
      console.log(ex);
    });
  }

  update() {
    this.formationService.updateFormation(this.formation).subscribe(res => {
      if (res.success) {

        this.messageService.success(res.message, res.detail);
        this.router.navigate(['/app/features/formation']);
      } else {
        this.messageService.warning(res.message, res.detail);
      }
    }, ex => {
      this.messageService.error('Erreur', 'Opération non effectuée');
      console.log(ex);
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onItemChange() {
    this.formateurService.getByTheme(this.formation.theme.id).subscribe(data => {
      this.formateurs = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }




  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
