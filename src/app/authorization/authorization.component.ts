import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  authForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })
  showPassword: boolean = false;
  onToggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    const user = {
      login: this.authForm.value.login,
      password: this.authForm.value.password
    }
    if (this.auth.isAuthUser(user)) {
      this.router.navigate(['/app/circle-bar-1']);
    }
  }
}
