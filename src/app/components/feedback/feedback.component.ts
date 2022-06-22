import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from 'src/app/Validators/validators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
   form: FormGroup;
 public shwText:string  | undefined;
public flag:boolean=false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submit(){
    const values=this.form.value;
    if(this.form.valid){
      this.flag=true;
      this.shwText="Successfully submitted the feedback form"
    }
    else{
      this.flag=false;
    }
    
  }
  constructor(fb : FormBuilder) { 
     this.form= fb.group({
    firstname : [null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,15}$")]],
    lastname : [null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,15}$")]],
    address: [],
    city: [null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,15}$")]],
    postalcode: [null,[Validators.required]],
    country: [],
    email : [null, [Validators.required, Validators.pattern(this.emailPattern)]],
    comments : new FormControl()
  }) }
  ngOnInit(): void{

  
  }

}
