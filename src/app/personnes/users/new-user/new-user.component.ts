import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/model/user';
import {UserService} from '../../../shared/services/userService';
import {MessageService} from '../../../shared/services/message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user = new User();
  id;
  title: any;
  confirmPassword: any;

  constructor(private userService: UserService,
              private messageService: MessageService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getById();
      this.title = 'Editer Utlisateur';
    } else {
      this.title = 'Nouvel Utlisateur';
    }
  }

  getById() {
    this.userService.findById(this.id).subscribe(data => {
      this.user = data;
    }, error => {
      console.log(error);
    });
  }

  valider() {
    console.log('**************************00');
    if (this.id) {
      this.updateUser();
    } else {
      this.addUser();
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

  private addUser() {
    this.userService.addUser(this.user)
      .subscribe(res => {
        if (res.success) {
          this.messageService.success(res.message, res.detail);
          this.router.navigate(['/app/personnes/user']);
        } else {
          this.messageService.warning(res.message, res.detail);
        }
      }, ex => {
        this.messageService.error('Erreur', 'Opération non effectuée');
        console.log(ex);
      });
  }

  private updateUser() {
    this.userService.updateUser(this.user).subscribe(res => {
      if (res.success) {
        this.messageService.success(res.message, res.detail);
        this.router.navigate(['/app/personnes/user']);
      } else {
        this.messageService.warning(res.message, res.detail);
      }
    }, ex => {
      this.messageService.error('Erreur', 'Opération non effectuée');
      console.log(ex);
    });
  }

}
