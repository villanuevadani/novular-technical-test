import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchWord: string;
  filteredUsers = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.loadGitHubUsers();
  }

  searchUser() {
    if (this.searchWord.length >= 1) {
      this.filteredUsers = this.dataService.filterUsers(this.searchWord);
    } else {
      this.filteredUsers = [];
    }
  }

  openUserProfile(user: Object) {
    this.dataService.setSelectedUser(user);
    alert(JSON.stringify(user));
      // Cambiar a la otra pantalla
  }

}
