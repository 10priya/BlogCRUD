import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserDataServiceService} from '../user-data-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLogin : FormGroup
  response : any
  constructor(private fb : FormBuilder , private router : Router , private loginService:UserDataServiceService) { }

  ngOnInit(): void {
  const  id = localStorage.getItem('id')
    this.userLogin = this.fb.group({
      _id   : id,
      userName : '',
      password : ''
    })
  }

  login(){
    this.loginService.userLogin(this.userLogin.value).subscribe(res =>{
      this.response = res;

      if(this.response.msg == "Success"){
        this.router.navigate(['/blog']);
      }else{
        alert('User Name or Password is incorrect.');
        this.userLogin.reset();
      }
    })
  }
}
 