import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
lgForm: FormGroup ;
  constructor(fb: FormBuilder) {
    this.lgForm=fb.group({
      username:[null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,15}$")]],
      password:[null, [Validators.required, Validators.pattern("^[0-9]{1,5}$")]]
    });
   }

  ngOnInit(): void {
  }

}
