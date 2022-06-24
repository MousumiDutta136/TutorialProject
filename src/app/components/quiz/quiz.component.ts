import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { QuizQustAnsService } from 'src/app/services/quiz-qust-ans.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public quizQAList : any=[];
  public score:number=0;
  public scoreArry =new Array();
 public scoreSet=new Set();
  myform: FormGroup;
  public shwText:string  | undefined;
  public flag:boolean=false;
 
  constructor(private quizQAservc : QuizQustAnsService,fb: FormBuilder) {
    this.myform = fb.group({ 
      answer:[]
      });
  }
      
  ngOnInit(): void {
    this.getAllQuizQsAns();
  }

  getAllQuizQsAns()
  {
    this.quizQAservc.getQuizQAJson().subscribe(res=>{
      this.quizQAList=res.questions;
     // console.log(res.questions);
    })
  }
  changeValue(option:boolean,qId:number) {
    console.log(option,qId);
    if(this.scoreSet.size==0){
      this.scoreSet.add(qId);
      this.scoreArry[qId]=option.toString();
    }
    else{
      if(this.scoreSet.has(qId)){
        this.scoreArry[qId]=option.toString();
      }
      else{
        this.scoreSet.add(qId);
        this.scoreArry[qId]=option.toString();
      }
    }
 
  }
  chkFinalScore(){
    let count=0;
      for(var val of this.scoreArry){
        console.log(val);
        if(val !=undefined && val==="true"){
          
          count=count+10;; 
        }
      }
    return count;
  }
  submit(frm : NgForm){
 
    if(frm.valid){
      this.flag=true;
      this.shwText="Successfully submitted the feedback form."
    }
    else{
      this.flag=false;
      
    } 
  }

}
