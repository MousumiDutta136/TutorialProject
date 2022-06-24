import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,} from "@angular/forms";
import { ValidateCity, ValidateCountry, ValidateEmail, ValidateFN, ValidateLN, ValidatePhone } from 'src/app/validators/feedbackValidators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
    form!: FormGroup;
    public shwText:string  | undefined;
    public flag:boolean=false;

  constructor(public fb: FormBuilder) { }

     ngOnInit(): void{
      this.form=this.fb.group({
        firstname: ['', [ValidateFN]],
        lastname: ['', [ValidateLN]],
        address: [''],
        city: ['', [ValidateCity]],
        country: ['', [ValidateCountry]],
        email: ['', [ValidateEmail]],
        phone: ['', [ValidatePhone]],
        comments: [''],
      });
    }
    
    submit(){
      const values=this.form.value;
      if(this.form.valid){
        this.flag=true;
        this.shwText="Successfully submitted the feedback form."
      }
      else{
        this.flag=false;
      } 
    }
}
