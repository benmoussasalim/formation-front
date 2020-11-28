import { Component, OnInit } from '@angular/core';
import {CandidatFormation} from '../../../shared/model/candidatFormation';
import {CandidatFormationService} from '../../../shared/services/candidatFormatinService';
import {of} from 'rxjs';
import {CandidatService} from '../../../shared/services/candidatService';
import {Candidat} from '../../../shared/model/candidat';

@Component({
  selector: 'app-candidat-formation',
  templateUrl: './candidat-formation.component.html',
  styleUrls: ['./candidat-formation.component.scss']
})
export class CandidatFormationComponent implements OnInit {
  list: Candidat[];
  candidatFormation: CandidatFormation = new CandidatFormation();

  constructor(private candidatFormationService: CandidatFormationService,
              private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.candidatService.getAll().subscribe(data => {
      this.list = data;
      console.log(this.list);
    }, ex => {
      console.log(ex);
    });
  }

  change(list: any) {
    console.log('nzSelectChange', list);
  }

  select(list: any) {
    console.log('nzChange', list);
  }
}
