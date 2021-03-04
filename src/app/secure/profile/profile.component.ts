import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '../../classes/auth';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  infoForm: FormGroup;
  passwordForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    const user = Auth.user;
    this.infoForm = this.fb.group({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });

    this.passwordForm = this.fb.group({
      password: '',
      password_confirm: '',
    });
  }

  userInfo() {
    const data = this.infoForm.getRawValue();
    this.auth.updateUser(data).subscribe((user: User) => {
      Auth.user = user;
    });
  }

  userPassword() {
    const data = this.passwordForm.getRawValue();
    this.auth.updatePassword(data).subscribe((res) => {
      console.log(res);
    });
  }
}
