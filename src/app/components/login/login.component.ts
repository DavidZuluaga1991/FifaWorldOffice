import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ])
  });

  constructor(private readonly router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  public login(): void {
    this.loginService.login(this.loginForm.value).subscribe(login => {
      localStorage.setItem('token', login.id);
      this.router.navigate(['dashboard']);
    });
  }

}
