import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewQaservService {

  constructor(private http : HttpClient) { }

  getInterviewQA(){
    return this.http.get<any>("assets/interviewq.json");
  }
}
