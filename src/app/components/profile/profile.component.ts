import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { DataService } from './../../services/data.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  userRepos;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }  

  ngOnInit() {
    this.user = this.dataService.getSelectedUser();
    let userName = this.route.snapshot.params.username;
    
    this.getUser(userName);

  }

  getUser(userName: string){
    this.dataService.loadGitHubSpecificUser(userName).subscribe(
      response => {
          this.dataService.setSelectedUser(response);
          this.user = response;
          this.getUserRepos(userName);
      },
      error => this.goToSearchScreen()
    );
  }

  getUserRepos(userName: string){
    this.dataService.getUserRepos(userName).subscribe(
      response => {
        this.userRepos = response;
      }
    );
  }

  goToSearchScreen(){
    this.dataService.setSelectedUser(null);
    this.router.navigate([ '/list']);  
  }

}