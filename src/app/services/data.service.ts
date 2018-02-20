import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endpoints } from '../values/endpoints';

@Injectable()
export class DataService {
  selectedUser: Object;
  usersArray;

  constructor(private http: HttpClient) { }

  searchUser(userName: string){
    let fullURL = Endpoints.gitHubSearchUsers + encodeURIComponent(userName); 
    return this.http.get(fullURL);
  }

  loadGitHubSpecificUser(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName;
    return this.http.get(fullURL);
  }

  getUserRepos(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName + Endpoints.userReposKeywords;
    return this.http.get(fullURL);
  }

  getUserFollowers(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName + Endpoints.userFollowersKeywords;
    return this.http.get(fullURL);
  }

  setSelectedUser(user) {
    this.selectedUser = user;
  }

  getSelectedUser() {
    return this.selectedUser;
  }

}
