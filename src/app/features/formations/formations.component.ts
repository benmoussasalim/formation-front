import { Component, OnInit } from '@angular/core';
import {Formation} from '../../shared/model/formation';
import {Router} from '@angular/router';
import {FormateurService} from '../../shared/services/formateurService';
import {FormationService} from '../../shared/services/formationService';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: Formation[];
  statusFormation = 'EN_ATTENTE';
  constructor(private  router: Router,
              private formationService: FormationService) { }

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
  }

  clickEdit(id: any) {
  }
}
