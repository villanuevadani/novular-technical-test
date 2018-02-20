import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './../../services/data.service';

import { Strings } from '../../values/strings';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  strings = Strings.listComponent;
  searchWord: string;
  filteredUsers = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {}

  searchUser() {
    if (this.searchWord && this.searchWord.length >= 3) {
      this.dataService.searchUser(this.searchWord).subscribe(
        response => {
          this.filteredUsers = response['items'] ? response['items'] : [];
        }
      );
        
    } else {
      this.filteredUsers = [];
    }
  }

  openUserProfile(user: Object) {
    this.dataService.setSelectedUser(user);
    this.router.navigate([ '/profile/' + user['login'] ]);
  }

}
