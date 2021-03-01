import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  submit(): void {
    const data = this.form.getRawValue();

    this.authService.login(data).subscribe((res) => {
      console.log(res);
    });
  }
}
