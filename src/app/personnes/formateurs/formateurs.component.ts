import { Component, OnInit } from '@angular/core';
import {Formateur} from '../../shared/model/formateur';
import {FormateurService} from '../../shared/services/formateurService';
import {MessageService} from '../../shared/services/message.service';
import {MessageResponse} from '../../shared/model/messageResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {
  formateurs: Formateur[];
  messageResponse: MessageResponse;
  constructor(private formateurService: FormateurService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  deleteFormateur(id: any) {
    this.formateurService.deleteFormateur(id).subscribe(data => {
      console.log(data);
      this.messageResponse = data;
      this.getAll();
    }, error => console.log(error));
  }

  clickEdit(id: any) {
    this.router.navigate(['/app/personnes/formateur/edit/', id]);
  }

  clickAdd() {
    this.router.navigate(['/app/personnes/formateur/new']);
  }
  getAll() {
    this.formateurService.getAll().subscribe(data => {
      console.log(data);
      this.formateurs = data;
    }, ex => console.log(ex));
  }
}
