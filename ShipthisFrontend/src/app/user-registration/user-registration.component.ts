import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserDataServiceService} from '../user-data-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userRegistration : FormGroup
  constructor(private fb : FormBuilder , private router : Router, private service : UserDataServiceService) { }
  response : any
  ngOnInit(): void {
    this.userRegistration = this.fb.group({
      userName : '',
      DOB      : '',
      password : ''
    })
  }

  registrationForm(){
    this.service.createUser(this.userRegistration.value).subscribe(res =>{
      this.response = res;
      if(this.response.msg =="Success"){
        localStorage.setItem('id',this.response.Data._id);
        this.router.navigate(['/login']);
         this.userRegistration.reset();
      }else{
        alert('User Name or Password is incorrect.');
      }
    })
    
  }
}
