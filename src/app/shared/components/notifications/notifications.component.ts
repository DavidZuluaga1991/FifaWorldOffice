import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@shared/notification/notification.service';
import { Notification } from '@shared/models/notification.model';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public notifications: Notification[] = [];
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotification.subscribe(notification => {
      console.log(notification);
      this.notifications.push(notification);
      // const source = interval(1000);
      // let countNotification = 0;
      // source.subscribe(val => {

      //   console.log(val)
      // });
      // timer(5000).subscribe(time => {
      //   this.notifications.pop();
      // });
    });
  }
}
