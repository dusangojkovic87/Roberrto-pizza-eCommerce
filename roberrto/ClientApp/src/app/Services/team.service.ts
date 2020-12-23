import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamMember } from '../Models/TeamMember';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getTeam(){
    return this.http.get<TeamMember[]>("http://localhost:5000/team/members");
  }
}
