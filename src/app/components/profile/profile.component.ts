import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { DataService } from './../../services/data.service';

import { Strings } from '../../values/strings';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  strings = Strings.profileComponent;
  user;
  userRepos;
  userFollowers;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }  

  ngOnInit() {
    this.user = this.dataService.getSelectedUser();
    let userName = this.route.snapshot.params.username;
    
    this.getUser(userName);

  }

  getUser(userName: string){
    this.dataService.loadGitHubSpecificUser(userName).subscribe(
      response => {
          this.setUser(response);
          this.getUserRepos(userName);
          this.getUserFollowers(userName);
      },
      error => this.goToSearchScreen()
    );
  }

  setUser(user: Object){
    this.dataService.setSelectedUser(user);
    this.user = user;
  }

  getUserRepos(userName: string){
    this.dataService.getUserRepos(userName).subscribe(
      response => {
        this.userRepos = response;
      }
    );
  }

  getUserFollowers(userName: string){
    this.dataService.getUserFollowers(userName).subscribe(
      response => {
        this.userFollowers = response;
      }
    );
  }

  goToSearchScreen(){
    this.dataService.setSelectedUser(null);
    this.router.navigate([ '/list']);  
  }

}