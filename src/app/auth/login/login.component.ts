import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginFrom= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {
      email,
      password
    } = this.loginFrom.value;
    try{
      const user = await this.authSvc.login(email, password);
      if(user){
        this.router.navigate(['/workspace']);
      }
    }
    catch(error){
      console.log(error);
    }
  }
}
