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
  list1: Candidat[] = [];
  list2: Candidat[] = [];
  candidatFormation: CandidatFormation = new CandidatFormation();
  private expandSet: any;
  isChecked = false;

  constructor(private candidatFormationService: CandidatFormationService,
              private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.candidatService.getAll().subscribe(data => {
      this.list1 = data;
      console.log(this.list1);
    }, ex => {
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

 /* log(value) {
    console.log(value);
    // tslint:disable-next-line:radix
    if ( parseInt(value[0]) > 0) {
      this.listChecked.push(value[0]);
    }
   // console.log(this.listChecked);
}*/

  addCandidatFormations(data: any) {
    console.log(data);
    // this.list1 = this.list1.splice(data.valueOf());
    // @ts-ignore
    this.list1.splice(data.valueOf());
    this.list2.push(data.valueOf());
    console.log(this.list1);
    console.log(this.list2);
  }
}
