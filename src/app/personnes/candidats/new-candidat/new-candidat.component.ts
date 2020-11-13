import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../shared/model/candidat';
import {Status} from '../../../shared/model/status';
import {CandidatService} from '../../../shared/services/candidatService';
import {MessageService} from '../../../shared/services/message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {numberOnly} from '../../../layouts/functions/NumberOnly';


@Component({
  selector: 'app-new-candidat',
  templateUrl: './new-candidat.component.html',
  styleUrls: ['./new-candidat.component.scss']
})
export class NewCandidatComponent implements OnInit {
  candidat = new Candidat();
  status = Status;
  etudiant = false;
  id;
  title;
  constructor(private candidatService: CandidatService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getById();
      this.title = 'Editer candidat';
    } else {
      this.candidat.dateInscrit = new Date();
      this.candidat.sexe = 'Homme';
      this.candidat.niveauEtude = 'Baccalauriat';
      this.candidat.status = 'Etudiant';
      this.title = 'Nouveau candidat';
    }
  }
  getById() {
    this.candidatService.findById(this.id).subscribe(data => {
      this.candidat = data;
      if (this.candidat.status.valueOf() === 'Employé') {
        this.etudiant = true;
      }
    }, error => {
      console.log(error);
    });
  }


  valider() {
    if (this.id) {
      this.update();
    } else {
      this.addCandidat();
    }

  }

  annuler() {
    if (this.id) {
     this.getById();
    }

  }

  onItemChange() {
    this.candidat.societe = '';
    console.log(this.candidat.status.valueOf());
    if (this.candidat.status.valueOf() === 'Employé') {
      this.etudiant = true;
    } else {
      this.etudiant = false;
    }
  }

  addCandidat() {
    this.candidatService.addCandidat(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.success(res.message, res.detail);
        this.router.navigate(['/app/personnes/candidat']);
      } else {
        this.messageService.warning(res.message, res.detail);
      }
    }, ex => {
      this.messageService.error('Erreur', 'Opération non effectuée');
      console.log(ex);
    });
  }

  update() {
    this.candidatService.updateCandidat(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.success(res.message, res.detail);
        this.router.navigate(['/app/personnes/candidat']);
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
}

