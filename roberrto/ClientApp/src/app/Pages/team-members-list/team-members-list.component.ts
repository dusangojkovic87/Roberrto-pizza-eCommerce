import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/Models/TeamMember';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.css']
})
export class TeamMembersListComponent implements OnInit {
  teamMembers:TeamMember[] = [];
  teamMemberIndex?:number = 0;

  constructor(private http:TeamService) { }

  ngOnInit(): void {
      this.http.getTeam().subscribe((data) =>{
         this.teamMembers = data;

      })

  }

  pickMember(index:number){
    this.teamMemberIndex = index;
    console.log(this.teamMemberIndex);

  }

}
