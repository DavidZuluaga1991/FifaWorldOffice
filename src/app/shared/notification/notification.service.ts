import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '@shared/models/notification.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification = new BehaviorSubject<Notification>({ text: '' })
  constructor() { }

  public setNotification(notification: Notification): void {
    this.notification.next(notification);
  }

  get getNotification(): BehaviorSubject<Notification> {
    return this.notification;
  }
}
