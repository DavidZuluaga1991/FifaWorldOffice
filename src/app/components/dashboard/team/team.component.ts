import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { TeamsService } from '../shared/services/team/team.service';
import { Subject, takeUntil } from 'rxjs';
import { Team } from '../shared/models/team.model';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { NotificationService } from '@shared/notification/notification.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy{

  @Input() id!: number;

  public teamForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    estadio: new FormControl('', [Validators.required]),
    sitioWeb: new FormControl(),
    nacionalidad: new FormControl('', [Validators.required]),
    fundacion: new FormControl('', [Validators.required]),
    entrenador: new FormControl('', [Validators.required]),
    capacidad: new FormControl('', [Validators.required]),
    valor: new FormControl(),
  });
  private destroySubscribe$ = new Subject();

  constructor(private teamService: TeamsService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.setNotification({ text: 'creado' });
    this.notificationService.setNotification({ text: 'creado' });
    this.notificationService.setNotification({ text: 'creado' });
    if(this.id) {
      this.getDataTeam();
    }
  }

  ngOnDestroy(): void {
    this.destroySubscribe$.next(true);
    this.destroySubscribe$.complete();
  }

  public getDataTeam(): void {
    this.teamService.getTeamById(this.id).pipe(takeUntil(this.destroySubscribe$)).subscribe((team: Team) => {
      Object.keys(team).forEach((key) => {
        const value = team[key  as keyof typeof team];
        if (key === 'fundacion' && value) {
          this.teamForm.get(key)?.setValue(new Date(value));
        } else if (key === 'valor' && value) {
          this.teamForm.get(key)?.setValue(value);
        } else {
          this.teamForm.get(key)?.setValue(value);
        }
      });
    });
  }

  public actionTeam(): void {
    !this.id ? this.createTeam() : this.updateTeam();
  }

  public backUrl(): void {
    history.back();
  }

  private createTeam(): void {
    this.teamService.createTeam(this.teamForm.value).pipe(takeUntil(this.destroySubscribe$)).subscribe(team => {
      this.notificationService.setNotification({ text: 'creado' });
      console.log('Team Creado correctamente');
    });
  }

  private updateTeam(): void {
    this.teamService.updateTeam(this.id, this.teamForm.value).pipe(takeUntil(this.destroySubscribe$)).subscribe(team => {
      console.log('Team modificado correctamente');
    });
  }

}
