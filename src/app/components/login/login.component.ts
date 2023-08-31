import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';

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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(error => {
      console.log(error)
      const errorr = this.loginForm.get('email')?.getError('required');
      console.log(errorr);
    });
  }

  public login(): void {
    this.loginService.login(this.loginForm.value).subscribe(login => {
      console.log(login);
    });
  }

}
