import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotificationsModule } from '@shared/components/notifications/notifications.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    NotificationsModule
  ]
})
export class DashboardModule { }
