import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationService } from '../../notification/notification.service';



@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [NotificationService],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
