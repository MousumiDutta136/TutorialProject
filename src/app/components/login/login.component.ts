import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { WelcomeUserService } from 'src/app/services/welcome-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public welcmName: string="";
  lgForm: FormGroup;
  constructor(fb: FormBuilder,private objWelcmServc:WelcomeUserService ) {
    this.lgForm=fb.group({
      username:[null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,15}$")]],
      password:[null, [Validators.required, Validators.pattern("^[0-9]{1,15}$")]]
    });
   }

  ngOnInit(): void {
  
  }
  onClick(usrnameText:string){  
    this.welcmName=usrnameText;
    this.objWelcmServc.changeName(this.welcmName);  
    } 
}
