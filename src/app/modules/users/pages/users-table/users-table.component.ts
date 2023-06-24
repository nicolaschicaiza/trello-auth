import { Component, OnInit } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit  {

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor(private usersServices: UsersService) {
  }

    ngOnInit(): void {
        this.usersServices.getUsers().subscribe(
            users => {
                this.dataSource.init(users)
            }
        );
    }


}
