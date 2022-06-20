import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizQustAnsService{

  constructor(private http : HttpClient) { }
getQuizQAJson(){
  return this.http.get<any>("assets/quiz-q-a.json");
}
}
