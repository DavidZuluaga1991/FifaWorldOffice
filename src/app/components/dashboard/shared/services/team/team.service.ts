import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../../models/team.model';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/environment';
import { ResponseData } from '../../models/response.model';
import { SearchTeam } from '../../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private uri = environment.uri;

  constructor(private http: HttpClient) { }

  public getTeams(page: number): Observable<ResponseData<Team[]>> {
    const uriContact = `${this.uri}/equipos/listar/${page}/10`
    return this.http.get<ResponseData<Team[]>>(uriContact);
  }
  public deleteTeam(id: number): Observable<any> {
    const uriContact = `${this.uri}/equipos/eliminar/${id}`;
    return this.http.delete<any>(uriContact);
  }

  public searchTeamById(id: string): Observable<Team> {
    const uriContact = `${this.uri}/equipos/consultar/${id}`;
    return this.http.get<Team>(uriContact);
  }

  public searchTeamByDate(dateinit: Date, datefinal: Date): Observable<Team[]> {
    const dateInitial = `${dateinit.getDay()}-${dateinit.getMonth()}-${dateinit.getFullYear()}`;
    const dateFinal = `${datefinal.getDay()}-${datefinal.getMonth()}-${datefinal.getFullYear()}`;
    const uriContact = `${this.uri}/equipos/consultar/${dateInitial}/${dateFinal}`;
    return this.http.get<Team[]>(uriContact);
  }

  public createTeam(team: Team): Observable<Team> {
    const uriContact = `${this.uri}/equipos/crear`;
    return this.http.post<Team>(uriContact, team);
  }
}
