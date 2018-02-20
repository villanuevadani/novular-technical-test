import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endpoints } from '../values/endpoints';
import { APIKeys } from '../values/apiKeys';

@Injectable()
export class DataService {
  selectedUser: Object;
  usersArray;

  constructor(private http: HttpClient) { }

  searchUser(userName: string){
    let fullURL = Endpoints.gitHubSearchUsers + encodeURIComponent(userName) + 
      '&' + Endpoints.accessTokenKeywords + APIKeys.gitHub; 
    return this.http.get(fullURL);
  }

  loadGitHubSpecificUser(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName + '?' + Endpoints.accessTokenKeywords + APIKeys.gitHub;
    return this.http.get(fullURL);
  }

  getUserRepos(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName + Endpoints.userReposKeywords + 
      '?' + Endpoints.accessTokenKeywords + APIKeys.gitHub;
    return this.http.get(fullURL);
  }

  getUserFollowers(userName: string){
    let fullURL = Endpoints.gitHubUsers + '/' + userName + Endpoints.userFollowersKeywords + 
      '?' + Endpoints.accessTokenKeywords + APIKeys.gitHub;;
    return this.http.get(fullURL);
  }

  setSelectedUser(user) {
    this.selectedUser = user;
  }

  getSelectedUser() {
    return this.selectedUser;
  }

}
