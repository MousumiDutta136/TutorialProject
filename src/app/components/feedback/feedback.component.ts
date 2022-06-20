import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from 'src/app/Validators/validators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }
  form!:FormGroup;

  submit(){
    const values=this.form.value;
    console.log(values);
  }
  ngOnInit(): void{

    this.form=new FormGroup({
      firstname : new FormControl(),
      lastname : new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl('',[Validators.required]),
      country: new FormControl(),
      email : new FormControl(),
      comments : new FormControl()
    },customValidator())
  }

}
