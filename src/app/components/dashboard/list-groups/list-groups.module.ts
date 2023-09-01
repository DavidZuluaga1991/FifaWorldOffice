import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGroupsRoutingModule } from './list-groups-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamsService } from '../shared/services/team/team.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListGroupsComponent } from './list-groups.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListGroupsComponent
  ],
  imports: [
    CommonModule,
    ListGroupsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TeamsService
  ]
})
export class ListGroupsModule { }
