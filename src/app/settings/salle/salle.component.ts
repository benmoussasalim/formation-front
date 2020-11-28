import { Component, OnInit } from '@angular/core';
import {SalleService} from '../../shared/services/salleService';
import {Salle} from '../../shared/model/salle';
import {MessageResponse} from '../../shared/model/messageResponse';
import {MessageService} from '../../shared/services/message.service';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {
  salle: Salle = new Salle();
  salles: Salle[];
  messageResponse: MessageResponse;
  isVisible = false;
  isOkLoading = false;
  constructor(private salleService: SalleService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.salleService.getAll().subscribe(data => {
      console.log(data);
      this.salles = data;
    }, ex => console.log(ex));
  }
  deleteSalle(id: any) {
    this.salleService.deleteSalle(id).subscribe(data => {
      console.log(data);
      this.messageResponse = data;
      this.getAll();
    }, error => console.log(error));
  }
  private update() {
    this.salleService.updateSalle(this.salle).subscribe(res => {
        if (res.success) {
          this.isVisible = false;
          this.getAll();
          this.messageService.success(res.message, res.detail);
        } else {
          this.messageService.warning(res.message, res.detail);
        }
      }, ex => {
        this.messageService.error('Erreur', 'Opération non effectuée');
        console.log(ex);
      },
      () => {
        this.isOkLoading = false;
      }
    );
  }
  private add() {
    this.salleService.addSalle(this.salle).subscribe(res => {
        if (res.success) {
          this.isVisible = false;
          this.getAll();
          this.messageService.success(res.message, res.detail);
        } else {
          this.messageService.warning(res.message, res.detail);
        }
      }, ex => {
        this.messageService.error('Erreur', 'Opération non effectuée');
        console.log(ex);
      },
      () => {
        this.isOkLoading = false;
      }
    );
  }
    clickAdd() {
      this.isVisible = true;
      this.salle = new Salle();
    }
  valider() {
    this.isOkLoading = true;
    if (this.salle.id) {
      this.update();
    } else {
      this.add();
    }
  }

  clickEdit(salle: Salle) {
    this.isVisible = true;
    Object.assign(this.salle, salle);
  }
}

