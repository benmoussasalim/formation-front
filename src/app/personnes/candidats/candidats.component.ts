import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../shared/model/candidat';
import {CandidatService} from '../../shared/services/candidatService';
import {MessageResponse} from '../../shared/model/messageResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.scss']
})
export class CandidatsComponent implements OnInit {
  candidats: Candidat[];
  candidat: Candidat = new Candidat();
  messageResponse: MessageResponse;
  keyWord: any;
  expandSet = new Set<number>();
  constructor(private candidatService: CandidatService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  getAll() {
    this.candidatService.getAll().subscribe(data => {
      console.log(data);
      this.candidats = data;
    }, ex => console.log(ex));
  }

  clickEdit(id: any) {
    this.router.navigate(['/app/personnes/candidat/edit/', id]);
  }

  clickAdd() {
    this.router.navigate(['/app/personnes/candidat/new']);
  }

  deleteCandidat(id: any) {
    this.candidatService.deleteCandidat(id).subscribe(data => {
      console.log(data);
      this.messageResponse = data;
      this.getAll();
    }, error => console.log(error));
  }

  filtrer(event: KeyboardEvent) {
    if (this.keyWord) {
      this.candidatService.filtrer(this.keyWord).subscribe(data => {
        this.candidats = data;
      }, ex => console.log(ex));
    } else {
      this.getAll();
    }
  }
}
