import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeamsService } from '../shared/services/team/team.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    TeamsService
  ]
})
export class TeamModule { }
