import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RoleService } from '../../../services/role.service';
import { Permissions } from '../../../interfaces/permissions';
import { PermissionService } from '../../../services/permission.service';
import { Response } from '../../../interfaces/response';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../interfaces/role';
import { tokenReference } from '@angular/compiler';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
})
export class RoleEditComponent implements OnInit {
  form: FormGroup;
  permissions: Permissions[] = [];
  role: Role;

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private permissionService: PermissionService,
    private route: ActivatedRoute,
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
        this.permissionsArray.push(
          this.fb.group({
            value: false,
            id: p.id,
          })
        );
      });
    });
    this.route.params.subscribe((params) => {
      this.roleService.get(params.id).subscribe((res: Response) => {
        this.role = res.data;
        const values = this.permissions.map((p) => {
          const selected =
            this.role.permissions.filter(
              (rolePermission: Permissions) => rolePermission.id === p.id
            ).length > 0;

          return {
            value: selected,
            id: p.id,
          };
        });
        this.form.patchValue({
          name: this.role.name,
          permissions: values,
        });
      });
    });
  }

  get permissionsArray() {
    return this.form.get('permissions') as FormArray;
  }

  submit() {
    const formData = this.form.getRawValue();
    const data = {
      name: formData.name,
      permissions: formData.permissions
        .filter((p) => p.value === true)
        .map((p) => p.id),
    };
    this.roleService.update(this.role.id, data).subscribe((res) => {
      this.router.navigate(['/roles']);
    });
  }
}
