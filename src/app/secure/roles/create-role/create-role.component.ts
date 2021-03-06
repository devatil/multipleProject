import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../../../services/permission.service';
import { Response } from '../../../interfaces/response';
import { Permissions } from '../../../interfaces/permissions';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ObservedValuesFromArray } from 'rxjs';
import { RoleService } from '../../../services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  permissions: Permissions[] = [];
  form: FormGroup;

  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      permissions: this.fb.array([]),
    });

    this.permissionService.all().subscribe((res: Response) => {
      this.permissions = res.data;
      this.permissions.forEach((p: Permissions) => {
        this.permissionArray.push(
          this.fb.group({
            value: false,
            id: p.id,
          })
        );
      });
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions: formData.permissions
        .filter((p) => p.value === true)
        .map((p) => p.id),
    };

    this.roleService.create(data).subscribe((res) => {
      this.router.navigate(['/roles']);
    });
  }

  get permissionArray() {
    return this.form.get('permissions') as FormArray;
  }
}
