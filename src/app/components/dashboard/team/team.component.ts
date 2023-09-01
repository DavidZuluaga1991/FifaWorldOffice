import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { TeamsService } from '../shared/services/team/team.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy{

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
  public id = '';

  constructor(private teamService: TeamsService, private routeActivate: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.routeActivate.snapshot.paramMap.get('id') ?? '';
  }

  ngOnDestroy(): void {
  }

  public actionTeam(): void {
    !this.id ? this.createTeam() : this.updateTeam();
  }

  private createTeam(): void {
    this.teamService.createTeam(this.teamForm.value).pipe(takeUntil(this.destroySubscribe$)).subscribe(team => {
      console.log('Team Creado correctamente');
    });
  }

  private updateTeam(): void {

  }

}
