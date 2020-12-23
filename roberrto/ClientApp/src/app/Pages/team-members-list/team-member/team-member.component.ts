import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/Models/TeamMember';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  @Input() member?:TeamMember;
  serverImgPath:string = "/images/members/";
  constructor() { }

  ngOnInit(): void {
    console.log(this.member);
  }

}
