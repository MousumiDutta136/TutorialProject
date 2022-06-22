import { Component, OnInit } from '@angular/core';
import { InterviewQaservService } from 'src/app/services/interview-qaserv.service';


@Component({
  selector: 'app-interview-qa',
  templateUrl: './interview-qa.component.html',
  styleUrls: ['./interview-qa.component.css']
})
export class InterviewQAComponent implements OnInit {

  title = "Prepare your Interview Questions";

  public qArray : any = [];

  constructor(private serviceObj : InterviewQaservService) { }

  ngOnInit(): void {
    this.getAllMyInterViewQA();
  }

  getAllMyInterViewQA(){
    this.serviceObj.getInterviewQA().subscribe(res=>{
      this.qArray = res.questions;
    })
  }

}
