import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../interfaces/role';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
  form: FormGroup;
  roles: Role[] = [];
  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: '',
      last_name: '',
      email: '',
      role_id: '',
    });

    this.roleService.all().subscribe((res: any) => {
      this.roles = res.data;
    });
  }

  submit() {
    const data = this.form.getRawValue();
    this.userService.create(data).subscribe((res) => {
      this.router.navigate(['/users']);
    });
  }
}
