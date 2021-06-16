import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  registerFrom = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const{
      email,
      password
    } = this.registerFrom.value;
    try{
      const user = await this.authSvc.register(email, password);
      if(user){
        this.router.navigate(['/workspace']);
      }
    }
    catch(error){
      console.log(error)
    }
  }

}
