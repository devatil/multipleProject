import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user().subscribe(
      (res: any) => {
        this.user = res.data;
        console.log(res.data);
      },
      (err) => {
        this.router.navigate(['/login']);
      }
    );
  }
}
