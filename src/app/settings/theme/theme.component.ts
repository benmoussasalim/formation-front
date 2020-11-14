import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../shared/services/theme.service';
import {Theme} from '../../shared/model/theme';
import {MessageResponse} from '../../shared/model/messageResponse';
import {MessageService} from '../../shared/services/message.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  theme: Theme = new Theme();
  themes: Theme[];
  messageResponse: MessageResponse;
  isVisible = false;
  isOkLoading = false;

  constructor(private themeService: ThemeService,
              private messageService: MessageService) {
  }

  clickAdd() {
    this.isVisible = true;
    this.theme = new Theme();
  }

  clickEdit(theme) {
    this.isVisible = true;
    Object.assign(this.theme, theme);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.themeService.getAll().subscribe(data => {
      console.log(data);
      this.themes = data;
    }, ex => console.log(ex));
  }



  deleteTheme(id: any) {
    this.themeService.deleteTheme(id).subscribe(res => {
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
  valider() {
    this.isOkLoading = true;
    if (this.theme.id) {
      this.update();
    }else {
      this.add();
    }
  }

  private update() {
    this.themeService.updateTheme(this.theme).subscribe(res => {
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
    this.themeService.addTheme(this.theme).subscribe(res => {
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
}

