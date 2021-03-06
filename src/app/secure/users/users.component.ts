import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Response } from '../../interfaces/response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];

  currentPage = 1;
  lastPage: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.userService.all(this.currentPage).subscribe((res: Response) => {
      this.users = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

  prev() {
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.refresh();
  }

  next() {
    if (this.currentPage === this.lastPage) return;
    this.currentPage++;
    this.refresh();
  }

  delete(id: number) {
    this.userService.delete(id).subscribe((res) => {
      this.users = this.users.filter((el) => el.id !== id);
    });
  }
}
