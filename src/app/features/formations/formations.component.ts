import { Component, OnInit } from '@angular/core';
import {Formation} from '../../shared/model/formation';
import {Router} from '@angular/router';
import {FormateurService} from '../../shared/services/formateurService';
import {FormationService} from '../../shared/services/formation.service';
import {MessageService} from '../../shared/services/message.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: Formation[];
  statusFormation = 'EN_ATTENTE';
  constructor(private  router: Router,
              private formationService: FormationService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.formationService.getAll(this.statusFormation).subscribe(data => {
      this.formations = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.router.navigate(['/app/features/formation/new']);
  }

  deleteFormation(id: any) {
    this.formationService.deleteFormation(id).subscribe(res => {
        if (res.success) {
          this.getAll();
          this.messageService.success(res.message, res.detail);
        } else {
          this.messageService.warning(res.message, res.detail);
        }
      }, ex => {
        this.messageService.error('Erreur', 'Opération non effectuée');
        console.log(ex);
      }
    );
  }

  clickEdit(id: any) {
    this.router.navigate(['/app/features/formation/edit', id]);
  }

  affectCandidat() {
    this.router.navigate(['/app/features/formation/affect']);
  }
}
