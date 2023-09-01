import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Team } from '../shared/models/team.model';
import { TeamsService } from '../shared/services/team/team.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit, OnDestroy {
  public teams: Team[] = [];
  public totalElements: number = 1;
  public pageIndex = 0;
  private destroySubscribe$ = new Subject();

  public searchForm = new FormGroup({
    id: new FormControl(),
    dateinit: new FormControl(),
    datefinal: new FormControl()
  });

  public hasSearchDisable = true;

  constructor(private teamService: TeamsService, private router: Router) {}

  ngOnInit(): void {
    this.changePage();
    this.searchForm.valueChanges.pipe(takeUntil(this.destroySubscribe$)).subscribe(changes => {
      if (changes.id && this.searchForm.get('dateinit')?.enabled && this.searchForm.get('datefinal')?.enabled) {
        this.searchForm.get('dateinit')?.disable();
        this.searchForm.get('datefinal')?.disable();
        this.hasSearchDisable = false;
      }
      if (changes.dateinit && this.searchForm.get('id')?.enabled) {
        this.searchForm.get('id')?.disable();
        this.hasSearchDisable = false;
      }
      if (!changes.id && !changes.dateinit && (this.searchForm.get('id')?.disabled || this.searchForm.get('dateinit')?.disabled)) {
        this.searchForm.get('dateinit')?.enable();
        this.searchForm.get('datefinal')?.enable();
        this.searchForm.get('id')?.enable();
        this.hasSearchDisable = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroySubscribe$.next(true);
    this.destroySubscribe$.complete();
  }

  public changePage(page: number = 0): void {
    this.teamService.getTeams(page).pipe(takeUntil(this.destroySubscribe$)).subscribe(response => {
      this.pageIndex = page;
      this.teams = response.content;
      this.totalElements = response.totalElements;
    });
  }

  public deleteTeam(team: Team): void {
    if (team.id) {
      this.teamService.deleteTeam(team.id).pipe(takeUntil(this.destroySubscribe$)).subscribe(response => {
        this.changePage(this.pageIndex);
      });
    }
  }

  public editTeam(team: Team): void {
    if (team.id) {
      this.router.navigate(['/dashboard/team/' + team.id]);
    }
  }

  public searchTeam() {
    this.searchForm.get('id')?.valid ? this.searchTeamById() : this.searchTeamByDate();
  }
  private searchTeamById(): void {
    this.teamService.searchTeamById(this.searchForm.get('id')?.value).pipe(takeUntil(this.destroySubscribe$)).subscribe(response => {
      this.teams = [response];
    });
  }
  private searchTeamByDate(): void {
    this.teamService.searchTeamByDate(this.searchForm.get('dateinit')?.value, this.searchForm.get('datefinal')?.value).pipe(takeUntil(this.destroySubscribe$)).subscribe(response => {
      this.teams = [...response];
    });
  }

}
