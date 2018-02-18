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

  filterUsers(searchWord) {
    return this.usersArray.filter(user => user.login.includes(searchWord));
  }

  getUsersArray() {
    return this.usersArray;
  }

  setSelectedUser(user) {
    this.selectedUser = user;
  }

}
