import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endpoints } from '../values/endpoints';

@Injectable()
export class DataService {
  selectedUser: Object;
  usersArray;

  constructor(private http: HttpClient) { }

  loadGitHubUsers() {
    return this.http.get(Endpoints.gitHubUsers).subscribe(
      response => {
        this.usersArray = response;
      }
    );
  }

  loadGitHubSpecificUser(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName;
    return this.http.get(fullURL);
  }

  getUserRepos(userName: string){
    return this.http.get(Endpoints.gitHubUsers + '/' + userName + Endpoints.userReposKeywords);
  }

  getUserFollowers(userName: string){
    return this.http.get(Endpoints.gitHubUsers + '/' + userName + Endpoints.userFollowersKeywords);
  }

  filterUsers(searchWord) {
    return this.usersArray.filter(user => user.login.includes(searchWord));
  }

  setSelectedUser(user) {
    this.selectedUser = user;
  }

  getSelectedUser() {
    return this.selectedUser;
  }

}
