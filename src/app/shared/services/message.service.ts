import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private notificationService: NotificationsService) { }
  public success(message: string, detail: string) {
    this.notificationService.success(message, detail, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  public warning(message: string, detail: string) {
    this.notificationService.warn(message, detail, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  public error(message: string, detail: string) {
    this.notificationService.error(message, detail, {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }
}
